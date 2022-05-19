
import equals from '../../fn/modules/equals.js';

let promise = Promise.resolve(0);
let n = 0;

function runTest(name, fn, expected, value, values, pass, fail) {
    try {
        fn((value) => (
            // If value is an Error object
            value instanceof Error ?
                fail(value) :
            // If value is expected
            expected === undefined || equals(value, expected) ?
                pass(value) :
            // Otherwise
            fail(new Error('done() value does not equal expected value'))
        ), value, ...values);
    }
    catch(e) {
        fail(e);
    }
}

export default function scheduleTest(time, name, fn, expected, ...values) {
    return promise = promise
    .then((value) => new Promise((resolve, reject) => {
        const pass = (value) => {
            console.log('%c✓ Test ' + (++n) + ' %c' + name, 'color: #B6BD00; font-weight: 400;', 'color: #779AAB; font-weight: 400;');
            resolve(value);
        };

        const fail = (e) => {
            console.log('%c✗ Test ' + (++n) + ' %c' + name, 'color: #f02f2f; font-weight: 600;', 'color: #779AAB; font-weight: 400;', e.message);
            reject();
        };

        return time === 'frame' ?
                requestAnimationFrame(() => runTest(name, fn, expected, value, values, pass, fail)) :
            time === 'tick' ?
                Promise.resolve().then(() => runTest(name, fn, expected, value, values, pass, fail)) :
            // Assume time is a number in seconds
            setTimeout(runTest, time * 1000, name, fn, expected, value, values, pass, fail) ;
    }));
}
