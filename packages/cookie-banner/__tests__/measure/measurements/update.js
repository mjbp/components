import cookieBanner from '../../../src';
import { composeParams, dataToURL, composeMeasurementConsent } from '../../../src/lib/measurement';
import { MEASUREMENTS } from '../../../src/lib/constants';
import defaults from '../../../src/lib/defaults';

navigator = navigator || {};
navigator.sendBeacon = jest.fn();

describe('Cookie banner > measure > update', () => {

    //user loads screen containing consent form, clicks banner accept
    it('should send form display, and form submit beacons', () => {
        document.body.innerHTML = `<div class="privacy-banner__form-container"></div>`;
        document.cookie = `${defaults.name}=${btoa(`{"consent":{"performance":0,"thirdParty":0},"cid":"12345"}`)}`;
        const __cb__ = cookieBanner({
            debug: true,
            hideBannerOnFormPage: false,
            secure: false,
            tid: 'UA-141774857-1',
            types: {
                performance: {
                    title: 'Performance title',
                    description: 'Performance description',
                    labels: {
                        yes: 'Pages you visit and actions you take will be measured and used to improve the service',
                        no: 'Pages you visit and actions you take will not be measured and used to improve the service'
                    },
                    fns: [
                        () => { }
                    ]
                },
                thirdParty: {
                    title: 'Third party title',
                    description: 'Performance description',
                    labels: {
                        yes: 'Pages you visit and actions you take will be measured by third parties',
                        no: 'Pages you visit and actions you take will not be measured by third parties'
                    },
                    fns: [
                        () => { }
                    ]
                }
            }
        });
        const cid = __cb__.getState().persistentMeasurementParams.cid;
        
        const formDisplayReqURL = dataToURL({
            ...composeParams(cid, 'UA-141774857-1'),
            ...MEASUREMENTS.FORM_DISPLAY
        }, 'collect');

        expect(navigator.sendBeacon).toHaveBeenCalled();
        //1. banner display tracked
        expect(navigator.sendBeacon).toHaveBeenNthCalledWith(1, formDisplayReqURL);
        
        //2. Change preferences and submit form tracked
        const fields = Array.from(document.querySelectorAll(`.${defaults.classNames.field}`));
        fields[0].checked = true;
        fields[2].checked = true;
        document.querySelector(`.${defaults.classNames.submitBtn}`).click();

        const consentString = composeMeasurementConsent(__cb__.getState().consent);
        const preferenceSaveUrl = dataToURL({
            ...composeParams(cid, 'UA-141774857-1'),
            ...MEASUREMENTS.SAVE_PREFERENCES,
            cd2: consentString === '' ? 'None' : consentString,
            cm2: 1,
            cm3: 1
        }, 'collect');
        expect(navigator.sendBeacon).toHaveBeenNthCalledWith(2, preferenceSaveUrl);

    });

});