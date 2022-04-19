# `<slide-show>`
An accessible `<slide-show>` custom element for building horizontal scroll-snapping
carousels. Features options for pagination, previous and next navigation buttons, autoplay, 
continuous looping and fullscreen mode. Children of a `<slide-show>` are layed out in a grid
and may contain any arbitrary HTML. About 12kB minified and gzipped.

![Example of an HTML carousel showing an image of a tractor as the current slide](https://user-images.githubusercontent.com/69022/163908499-3eab9f2e-c8f5-4249-ad60-7f18ad235492.jpg)

## Quick start

Clone this repository, or copy the files in `build/`, into your front-end
assets. Then import `build/element.js`:

```html
<script type="module" src="./path/to/slide-show/build/element.js"></script>
```

This registers the `<slide-show>` custom element.

You may also include `build/element.css`, which provides minimal fallback style for
the element before it is registered, or for those times when JS fails completely:

```html
<link rel="stylesheet" src="./path/to/slide-show/build/element.css"></link>
```

You are now ready to write `<slide-show>` tags in your HTML:

```html
<slide-show controls="pagination">
    <img src="../images/donkeys.jpg" draggable="false" />
    <img src="../images/tractor.jpg" draggable="false" />
    <img src="../images/mauverin.jpg" draggable="false" />
</slide-show>
```


## API

### Attributes

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

- `--slide-duration` - a CSS time value in `s` or `ms`
- `--padding-left` - padding and scroll-padding inside the scroll area
- `--padding-right` - padding and scroll-padding inside the scroll area
- `::part(slides)` - the slides container, by default a grid layout
- `::part(prev-button)` - the 'previous' navigation button
- `::part(next-button)` - the 'next' navigation button
- `::part(page-button)` - a pagination button
- `::part(page-button-active)` - the currently active pagination button
- `::part(fullscreen-button)` - the fullscreen toggle button
- `::part(fullscreen-button-active)` - the fullscreen toggle button when in fullscreen

Style for child slides:

- `--slide-duration` - a CSS time value in `s` or `ms`

### Polyfill for `element.scrollTo()`

The script `element.js` includes a polyfill for `element.scrollTo()`, as
Safari's native version lacks support for smooth scrolling behaviour. The
polyfill is ignored in other browsers.


## Build

To build the `<slide-show>` component from its dependent modules, you must have
[_Deno_](https://deno.land/) installed. You then need to clone this git
repository into the same directory as three other repositories that contain
dependencies:

```cli
git clone git@gihub.com:stephband/fn
git clone git@gihub.com:stephband/dom
git clone git@gihub.com:stephband/literal
git clone git@gihub.com:stephband/slide-show
```

Now the `slide-show` repo is ready to build:

```cli
cd slide-show
make modules
make docs
```

Builds production files to the `build/` folder, and documentation to `index.html`.

The build process launches *esbuild* to import and compile JS and CSS modules,
and *literal* to compile documentation.
