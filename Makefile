DEBUG=

# Tell make to ignore existing folders and allow overwriting existing files
.PHONY: modules docs literal

# Must format with tabs not spaces
literal:
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run --unstable --no-check ../literal/deno/make-literal.js ./ debug

docs:
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js docs/docs.js ./docs/module.js
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js docs/docs.css ./docs/module.css
	make literal

modules:
	rm -r build
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js build/slide-show.js ./element.js
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js build/slide-show.css ./element.css
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js build/slide-show-shadow.css ./element-shadow.css
