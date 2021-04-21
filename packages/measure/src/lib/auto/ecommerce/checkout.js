import { handler, composeAction } from '../shared';
import { DATA_ATTRIBUTES, TRIGGER_EVENTS, LISTENER_OPTIONS } from '../constants';

export default __m => {
    const nodes = [].slice.call(document.querySelectorAll(`[${DATA_ATTRIBUTES.CHECKOUT}]`));
    if (nodes.length === 0) return;
    
    for (let index in nodes){
        TRIGGER_EVENTS.forEach(ev => {
            nodes[index].addEventListener(ev, handler(composeAction({ node: nodes[index], action: 'checkout', event: 'Checkout' }), __m), LISTENER_OPTIONS);
        });
    }
};