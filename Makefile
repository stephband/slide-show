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
	rm -rf build
	# Run separate builds to package them as standalones
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js build/ ./slide-show-figure.js
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js build/ ./slide-show-ol.js
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js build/ ./slide-show-ul.js
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js build/ ./slide-show.js
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js build/ ./slide-show.css ./slide-show-shadow.css
