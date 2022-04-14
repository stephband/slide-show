DEBUG=

# Tell make to ignore existing folders and allow overwriting existing files
.PHONY: modules literal

# Must format with tabs not spaces
#literal:
#	deno run --allow-read --allow-env --allow-net --allow-write --allow-run --unstable --no-check https://stephen.band/literal/deno/make-literal.js ./ debug

modules:
	rm -r build
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run https://stephen.band/fn/deno/make-modules.js build ./element.js ./element.css ./shadow.css
