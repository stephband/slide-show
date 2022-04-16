# `<slide-show>`
A standalone `<slide-show>` custom element for building horizontal scroll-snap
carousels. Less than 10kB minified and gzipped.


## Quick start

Clone this repository, or copy the files in `build/`, into your front-end
assets. Then import `element.js`:

```html
<script type="module" src="./path/to/slide-show/build/element.js"></script>
```

This registers the `<slide-show>` custom element.

You may also include `element.css`, which provides some minimal fallback style
for the element before it is registered, and for those cases where JS fails completely:

```html
<link rel="stylesheet" src="./path/to/slide-show/build/element.css"></link>
```


## Features

### Attributes

- `autoplay` - boolean attribute
- `controls` - token list attribute
- `loop` - boolean attribute (Not yet implemented)

### Properties

- `.active` - a reference to the current scroll-snap aligned child
- `.autoplay` - boolean indicating state of autoplay
- `.loop` - a boolean indicating state of loop (Not yet implemented)

### Events

- `'slide-active'` - emitted by a child slide when scrolled into scroll-snap alignment

### Style

- `::part(slides)`
- `::part(prev-button)`
- `::part(next-button)`


## Build

To build the `<slide-show>` component from its dependent modules, you must have
_Deno_ installed. You then need to clone this git repository into the same
directory as three repositories that contain dependent modules:

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
```

Builds production files to the `build/` folder, and documentation to `index.html`.

The build process launches *esbuild* to import and compile JS and CSS modules,
and *literal* to compile documentation.
