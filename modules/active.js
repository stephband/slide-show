
/*
Detect and scroll to active slides. The active is the slide currently in
scroll-snap alignment.
*/

import { px }      from '../../dom/modules/parse-length.js';
import rect        from '../../dom/modules/rect.js';
import { trigger } from '../../dom/modules/trigger.js';


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

export function scrollTo(scroller, target, behavior) {
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
        behavior: behavior || 'smooth'
    });
}

export function jumpTo(scroller, target) {
    scroller.style.setProperty('scroll-behavior', 'auto', 'important');
    scrollTo(scroller, target, 'auto');
    scroller.style.setProperty('scroll-behavior', '');
}

function getActive(scroller, children) {
    const { leftPadding, rightPadding, centrePadding } = getPaddedBox(scroller);

    let n = children.length;
    let slide;

    while ((slide = children[--n])) {
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

function notLoopGhost(slide) {
    return !slide.dataset.slideIndex;
}

export function updateActive(data) {
    const { scroller, children } = data;
    let active = getActive(scroller, children);
//console.log(active, children);
    // For loop
    if (active.dataset.slideIndex !== undefined) {
        active = children.filter(notLoopGhost)[active.dataset.slideIndex];
        jumpTo(scroller, active);
    }

    if (active === data.active) { return; }
    data.active = active;
    if (active === undefined) { return; }
    data.actives.push(active);
    trigger('slide-active', active);
}
