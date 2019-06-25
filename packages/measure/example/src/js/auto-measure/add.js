import { TRIGGER_EVENTS, DATA_ATTRIBUTES, LISTENER_OPTIONS } from './constants';
import { handler, composeAction } from './shared';

export default __m => {
    const nodes = Array.from(document.querySelectorAll(`[${DATA_ATTRIBUTES.ADD}]`));
    if(nodes.length === 0) return;
    
    for(let node of nodes){
        TRIGGER_EVENTS.forEach(ev => {
            node.addEventListener(ev, handler(composeAction(node, 'add', 'Add to cart'), __m), LISTENER_OPTIONS);
        });
    }
};