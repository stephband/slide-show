
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@stephband/slide-show)

# `<slide-show>`
An accessible `<slide-show>` custom element for building horizontal scroll-snapping
carousels. Features options for pagination, previous and next navigation buttons, autoplay,
continuous looping and fullscreen mode. Children of a `<slide-show>` are layed out in a grid
and may contain any arbitrary HTML. About 12kB minified and gzipped.

![Example of an HTML carousel showing an image of a tractor as the current slide](https://user-images.githubusercontent.com/69022/163908499-3eab9f2e-c8f5-4249-ad60-7f18ad235492.jpg)

## Demos and Documentation

Demos and docs at [stephen.band/slide-show/](https://stephen.band/slide-show/).

## Install

### Via download

Download the latest release:

<a href="https://github.com/stephband/slide-show/releases">github.com/stephband/slide-show/releases</a>

Then import the CSS and JS files:

```html
<link rel="stylesheet" href="./build/slide-show.css" />
<script type="module" src="./build/slide-show.js"></script>
```

### Via npm

Install into `node_modules/`:

```js
npm install @stephband/slide-show
```

The package comes with CSS files, one for the outer DOM and one for the shadow
DOM. The outer DOM CSS can be imported from `build/slide-show.css`:

```html
<link rel="stylesheet" href="./node_modules/@stephband/slide-show/build/slide-show.css" />
```

The shadow DOM CSS file must be placed in the same location as 'build/slide-show.js',
which will work fine as-is until you build your own package to a different location. (I
really don't know how you are supposed to handle this sort of thing via npm and I
hope someone will <a href="https://github.com/stephband/slide-show/issues">advise</a>.)

## Quick start

You are now ready to write `<slide-show>` tags in your HTML:

```html
<slide-show loop controls="pagination">
    <img src="../images/donkeys.jpg" draggable="false" />
    <img src="../images/tractor.jpg" draggable="false" />
    <img src="../images/mauverin.jpg" draggable="false" />
</slide-show>
```

## API

### Attributes

- `active`   - id string of initial slide to 'activate'
- `autoplay` - boolean attribute, slide-show plays through slides
- `controls` - token list attribute supporting the tokens `"pagination"`, `"navigation"`, `"fullscreen"`
- `loop`     - boolean attribute, causes slides to appear on a continuous carousel

### Properties

- `.active`   - a reference to the current scroll-snap aligned (ie 'active') child
- `.autoplay` - boolean, get/set the state of autoplay
- `.controls` - a TokenList object supporting the tokens `"pagination"`, `"navigation"`, `"fullscreen"`
- `.loop`     - boolean, get/set the state of loop

### Events

- `'slide-active'` - emitted by a child slide when scrolled into scroll-snap alignment

### Style

Style for the `slide-show`:

- `--slide-duration` - a CSS time value in `s` or `ms`, used when `autoplay` is enabled
- `--padding-left` - padding and scroll-padding inside the scroll area
- `--padding-right` - padding and scroll-padding inside the scroll area
- `::part(prev-button)` - the 'previous' navigation button
- `::part(next-button)` - the 'next' navigation button
- `::part(page-button)` - a pagination button
- `::part(page-button-active)` - the currently active pagination button
- `::part(fullscreen-button)` - the fullscreen toggle button
- `::part(fullscreen-button-active)` - the fullscreen toggle button when in fullscreen

Style for child slides:

- `--slide-duration` - a CSS time value in `s` or `ms`, used when `autoplay` is enabled

See [stephen.band/slide-show/](https://stephen.band/slide-show/) for more detail.

### Polyfill for `element.scrollTo()`

The script `element.js` includes a polyfill for `element.scrollTo()`, as
Safari's native version lacks support for smooth scrolling behaviour. The
polyfill is ignored in other browsers.


## Build

To build the `<slide-show>` component from its dependent modules, you must have
[_Deno_](https://deno.land/) installed. You then need to clone this git
repository into the same directory as two other repositories that contain
dependencies:

```cli
git clone git@github.com:stephband/fn
git clone git@github.com:stephband/dom
git clone git@github.com:stephband/slide-show
cd slide-show
```

Now the `slide-show` modules can be built. The build process uses *esbuild*
to import and compile JS and CSS modules to the `build/` folder:

```cli
make modules
```

## Build documentation

To build documentation, also clone the literal repo:

```cli
git clone git@github.com:stephband/literal
cd slide-show
```

The documentation builder compiles `.literal` templates to `.html`, pulling out
documentation comments from JS and CSS, and packages dependencies found in
the `docs/` folder:

```cli
make docs
```
