
/*
Detect and scroll to active slides. The active is the slide currently in
scroll-snap alignment.
*/

import { px }      from '../../dom/modules/parse-length.js';
import rect        from '../../dom/modules/rect.js';


function getPaddedBox(scroller) {
    const box          = rect(scroller);
    const computed     = window.getComputedStyle(scroller, null);
    const paddingLeft  = px(computed.getPropertyValue('padding-left'));
    const paddingRight = px(computed.getPropertyValue('padding-right'));

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

function scrollToTarget(scroller, target, behavior) {
    const scrollerBox = getPaddedBox(scroller);
    const targetBox   = rect(target);
    const snap        = getSnapX(target);

    // Move scroll position to target slide, taking into account
    // scroll-snap-align of the slide
    scroller.scrollTo({
        top:  scroller.scrollTop,
        left: scroller.scrollLeft + (
            snap === 'left' ? targetBox.left - scrollerBox.leftPadding :
            snap === 'right' ? targetBox.right - scrollerBox.rightPadding :
            targetBox.left + (targetBox.width / 2) - scrollerBox.centrePadding
        ),
        behavior: behavior
    });
}

export function scrollTo(scroller, target) {
    scrollToTarget(scroller, target, 'smooth');
    return target;
}

export function jumpTo(scroller, target) {
    scroller.style.setProperty('scroll-behavior', 'auto', 'important');
    scrollToTarget(scroller, target, 'auto');
    scroller.style.setProperty('scroll-behavior', '');
    return target;
}

function getAligned(scroller, elements) {
    const { leftPadding, rightPadding, centrePadding } = getPaddedBox(scroller);

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
    const { scroller, elements, children } = data;
    const aligned = getAligned(scroller, elements);
    return isGhost(aligned) ?
        children[aligned.dataset.slideIndex] :
        aligned ;
}

export function updateActive(data) {
    const { scroller, children, elements } = data;
    const current = getAligned(scroller, elements);
    let active;

    // If current is a loop ghost jump to the actual slide it references
    if (!current) { return; }
    if (isGhost(current)) {
        active = children[current.dataset.slideIndex];
        jumpTo(scroller, active);
    }
    else {
        active = current;
    }

    data.activations.push(active);
}


function activateIndex(host, elements, i) {
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
