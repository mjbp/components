# Table row link

Add className to table row when focus is on a child element. The mmost common use-case is to highlight the entire row when tabbing through a table containing single links per row.

## Usage
HTML
```
<div class="js-boilerplate"></div>
```

JS
```
npm i -S @stormid/boilerplate
```
```
import Boilerplate from '@stormid/boilerplate';

Boilerplate.init('.js-boilerplate');
```

## Options
```
{
    callback: null
}
```

e.g.
```
Boilerplate.init('.js-selector', {
    callback(){
        console.log(this);
    }
});
```

## Tests
```
npm t
```

## License
MIT