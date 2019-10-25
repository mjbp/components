# Scroll Spy

Use the IntersectionObserver API to check when a section of the document is in view and update an associated DOM node.

Useful for automated scroll position related navigation state management.

---

## Example usage
HTML
```
<header>
    <nav aria-label="mMain navigation">
        <a class="js-scroll-spy" href="#section1">Section 1</a>
        <a class="js-scroll-spy" href="#section2">Section 2</a>
        <a class="js-scroll-spy" href="#section3">Section 3</a>
    </nav>
</header>
<main>
    <section id="section1" aria-label="Section 1">
    ...
    </section>
    <section id="section2" aria-label="Section 2">
    ...
    </section>
    <section id="section3" aria-label="Section 3">
    ...
    </section>
</main>
```

JS
```
npm i -S @stormid/scroll-spy
```
```
import ScrollSpy from '@stormid/scroll-spy';

ScrollSpy.init('.js-scroll-spy');
```

## Options
```
{
	root: null, //element that is used as the viewport for checking visiblity of the target
	rootMargin: '0px 0px 0px 0px', //margin around the root, px or percentage values
	threshold: 0, //Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed
    activeClassName: 'is--active', //className added when in view
	callback: null, //function executed when intersecting view
	single: true // boolean to indicate whether a single or multiple spies can be active at once
}
```


## API
Each instance returned from init exposes the interface
```
{
    getState, a Function that returns the current state Object
}
```

## Tests
```
npm t
```

## Browser support
Depends on Object.assign and the [IntersectionObserver API](https://caniuse.com/#feat=intersectionobserver), IE11 will require polyfills.

## License
MIT
