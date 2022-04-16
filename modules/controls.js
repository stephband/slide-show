
import create from '../../dom/modules/create.js';

export function enableControls(data) {
    if (!data.controls) {
        const nav = create('nav', { part: 'controls' });
        data.shadow.append(nav);
        data.controls = nav;
    }
}

export function disableControls(data) {
    console.log('CONTROLS DISABLE');
}
