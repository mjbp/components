import { fromCodePoint } from 'markdown-it/lib/common/utils';
import Measure from '../../../src';
import { url } from '../../../src/lib/shared/compose';

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


//https://www.google-analytics.com/collect?tid=UA-141774857-1&v=1&aip=1&sr=0x0&vp=0x0&de=UTF-8&sd=24-bit&ul=en-US&dl=http%3A%2F%2Flocalhost%2F&dh=localhost&dp=%2F&dt=&cid=6efee081-1e41-48a6-9b55-8ee7fec93d1c&ec=Email%20Link&el=tes***%40stormid.com&ea=tes***%40stormid.com&t=event&z=1189532109"
	it('should ', () => {
        document.body.innerHTML = `<a href="mailto:test@stormid.com" class="email-link">test@stormid.com</a>`;
        const emailLink = document.querySelector('.email-link');
        const __m = Measure.init('UA-141774857-1');
        
        /*
        need to trim cachebuster z property
        url({
            data: {
                ...persistent,
                ...stack,
                t: type,
                z: cacheBuster()
            },
            action: PATH
        })*/

        expect(navigator.sendBeacon).toHaveBeenCalled();
        console.log(__m.getState());
        emailLink.click();
        expect(navigator.sendBeacon).toHaveBeenCalledWith('potato');
    });

});