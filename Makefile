DEBUG=

# Tell make to ignore existing folders and allow overwriting existing files
.PHONY: modules docs literal

# Must format with tabs not spaces
literal:
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run --no-check https://cdn.jsdelivr.net/gh/stephband/literal@main/deno/make-literal.js ./ debug

docs:
	# deno run --allow-read --allow-env --allow-net --allow-write --allow-run https://cdn.jsdelivr.net/gh/stephband/fn@master/deno/make-modules.js docs/docs.js ./docs/module.js
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run https://cdn.jsdelivr.net/gh/stephband/fn@master/deno/make-css.js docs/docs.css ./docs/module.css
	make literal

modules:
	@rm -f deno.lock
	rm -rf build
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run https://cdn.jsdelivr.net/gh/stephband/fn@master/deno/make-modules.js build/element.js ./module.js
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run https://cdn.jsdelivr.net/gh/stephband/fn@master/deno/make-css.js build/element.css ./module.css
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run https://cdn.jsdelivr.net/gh/stephband/fn@master/deno/make-css.js build/shadow.css ./shadow.css
	@rm deno.lock
