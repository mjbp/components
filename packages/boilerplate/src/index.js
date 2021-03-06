import defaults from './lib/defaults';
import factory from './lib/factory';

/*
 * Returns an array of objects augmenting DOM elements that match a selector
 *
 * @param selector, String, A DOMString containing one or more selectors to match, must be a valid CSS selector string
 * @params options, Object, to be merged with defaults to become the settings propery of each returned object
 */
export default (selector, options) => {
    //Array.from isnt polyfilled
    //https://github.com/babel/babel/issues/5682
    const nodes = [].slice.call(document.querySelectorAll(selector));

    //no DOM nodes found, return with warning
    if (nodes.length === 0) return void console.warn(`boilerplate not initialised, no elements found for selector '${selector}'`);
    
    //return array of objects, one for each DOM node found
    return nodes.map(node => Object.create(factory({
        settings: { ...defaults, ...options },
        node
    })));
};