import Validate from '../../../src';
    
window.addEventListener('DOMContentLoaded', () => {
    // window.__t1__ = Tabs.init('.js-tabs');
    Validate.init('form', { 
        preSubmitHook(){}
    })
    // console.log(__validators__[document.querySelector('.js-validate')].getState());
});