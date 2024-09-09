
/*
Detect and scroll to active slides. The active is the slide currently in
scroll-snap alignment.
*/

import { px } from 'dom/parse-length.js';
import rect   from 'dom/rect.js';
import isFF   from 'dom/is-firefox.js';

// FireFox resets scrollLeft to 0 on DOMContentLoaded. Naughty FireFox. We
// can not feature detect this until it has happened, unfortunately, so we
// are forced to use a browser hack `isFF`.
let DOMContentLoaded = false;
if (isFF) {
    document.addEventListener('DOMContentLoaded', (e) => DOMContentLoaded = true);
}

function getPaddedBox(slides) {
    const box          = rect(slides);
    const computed     = window.getComputedStyle(slides, null);

    // TODO: These values may contain `calc()`, which won't parse. How do we get
    // used or actual values out of CSS?
    let paddingLeft, paddingRight;
    try {
        paddingLeft  = px(computed.getPropertyValue('padding-left'));
        paddingRight = px(computed.getPropertyValue('padding-right'));
    }
    catch(e) {
        console.warn(e.message);
        paddingLeft  = 0;
        paddingRight = 0;
    }

    box.leftPadding   = box.left + paddingLeft;
    box.rightPadding  = box.left + box.width - paddingRight;
    box.centrePadding = box.leftPadding + (box.width - paddingLeft - paddingRight) / 2;

    return box;
}

function getSnapX(element) {
    // Todo: do we need webkit property here?
    const snap = window
        .getComputedStyle(element, null)
        .getPropertyValue('scroll-snap-align');

    // Imagine a detection line half a slides' width to the right of
    // the left, the centre, or the right...
    return snap.endsWith('start') ? 'left' :
        snap.endsWith('end')   ? 'right' :
        'centre' ;
}

function scrollToTarget(slides, target, behavior) {
    const slidesBox = getPaddedBox(slides);
    const targetBox   = rect(target);
    const snap        = getSnapX(target);

    // Move scroll position to target slide, taking into account
    // scroll-snap-align of the slide
    const position = {
        top:  slides.scrollTop,
        left: slides.scrollLeft + (
            snap === 'left' ? targetBox.left - slidesBox.leftPadding :
            snap === 'right' ? targetBox.right - slidesBox.rightPadding :
            targetBox.left + (targetBox.width / 2) - slidesBox.centrePadding
        ),
        behavior: behavior
    };

    slides.scrollTo(position);

    // In Firefox, wait for DOMContentLoaded and set position again.
    if (isFF && !DOMContentLoaded) {
        document.addEventListener('DOMContentLoaded', () => slides.scrollTo(position));
    }
}

export function scrollTo(slides, target) {
    scrollToTarget(slides, target, 'smooth');
    return target;
}

export function jumpTo(slides, target) {
    slides.style.setProperty('scroll-behavior', 'auto', 'important');
    scrollToTarget(slides, target, 'auto');
    slides.style.setProperty('scroll-behavior', '');
    return target;
}

function getAligned(slides, elements) {
    const { leftPadding, rightPadding, centrePadding } = getPaddedBox(slides);

    let n = elements.length;
    let slide;

    while ((slide = elements[--n])) {
        const slideRect = rect(slide);

        if (!slideRect) { continue; }

        // Todo: do we need webkit property here?
        const snap = getSnapX(slide);

        // Imagine a detection line half a slides' width to the right of
        // the left, the centre, or the right...
        const detection = (slideRect.width / 2) + (
            snap === 'left' ? leftPadding :
            snap === 'right' ? rightPadding :
            centrePadding
        );

        // ...and a slide registration position at it's corresponding left,
        // centre or right position. Safari reports 2 values for
        // scroll-snap-align it's the second that is the inline axis value
        const x = snap === 'left' ? slideRect.left :
            snap === 'right' ? slideRect.right :
            slideRect.left + slideRect.width / 2 ;

        // If position has crossed the detection going left, we're in the money
        if (x <= detection) {
            break;
        }
    }

    // Return active slide
    return slide;
}

function isGhost(slide) {
    return !!slide.dataset.slideIndex;
}

export function getActive(data) {
    const { slides, elements, children } = data;
    const aligned = getAligned(slides, elements);
    return isGhost(aligned) ?
        children[aligned.dataset.slideIndex] :
        aligned ;
}

export function updateActive(data) {
    const { slides, children, elements } = data;
    const current = getAligned(slides, elements);
    let active;

    // If current is a loop ghost jump to the actual slide it references
    if (!current) { return; }
    if (isGhost(current)) {
        active = children[current.dataset.slideIndex];
        jumpTo(slides, active);
    }
    else {
        active = current;
    }

    data.activations.push(active);
}


export function activateIndex(host, elements, i) {
    const target = elements[i];
    if (!target) { return; }
    host.active = target;
}

export function activateNext(host, elements, active) {
    const i = elements.indexOf(active) + 1;
    activateIndex(host, elements, i);
}

export function activatePrevious(host, elements, active) {
    const i = elements.indexOf(active) - 1;
    activateIndex(host, elements, i);
}
