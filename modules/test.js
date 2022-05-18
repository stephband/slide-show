let promise = Promise.resolve(0);
let n = 0;

function runTest(name, fn, value, values, resolve, reject) {
    try {
        fn(resolve, value, ...values);
    }
    catch(e) {
        reject(e);
    }
}

export default function scheduleTest(time, name, fn, ...values) {
    return promise = promise
    .then((value) => new Promise((resolve, reject) =>
        setTimeout(runTest, time * 1000, name, fn, value, values, (value) => {
            // Log pass
            console.log('%c✓ Test ' + (++n) + ' %c' + name, 'color: #B6BD00; font-weight: 400;', 'color: #779AAB; font-weight: 400;');
            resolve(value);
        }, (e) => {
            // Log fail
            console.log('%c✗ Test ' + (++n) + ' %c' + name, 'color: #ba4029; font-weight: 400;', 'color: #779AAB; font-weight: 400;', e.message);
            reject();
        })
    ));
}
