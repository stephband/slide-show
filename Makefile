DEBUG=

# Tell make to ignore existing folders and allow overwriting existing files
.PHONY: modules docs literal

# Must format with tabs not spaces
docs:
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js docs/build ./docs/docs.js ./docs/docs.css
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run --unstable --no-check ../literal/deno/make-literal.js ./ debug

modules:
	rm -r build
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js build ./element.js ./element.css ./shadow.css
