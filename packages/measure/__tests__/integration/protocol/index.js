import Measure from '../../../src';

navigator = navigator || {};
navigator.sendBeacon = jest.fn()

describe('Measure > protocol > links', () => {
	
    //set up DOM
    //check Store.getState() before and after
    //mock navigator.sendBeacon

    //tests:
    //
    //link types
    //email
    //tel
    //download
    //external
    //
    //event types



	it('should ', () => {
        document.body.innerHTML = `<a href="mailto:test@stormid.com" class="email-link">test@stormid.com</a>`;
        const emailLink = document.querySelector('.email-link');
        const __m = Measure('UA-141774857-1');
        const initialState = __m.getState();
        emailLink.click();
    });

});