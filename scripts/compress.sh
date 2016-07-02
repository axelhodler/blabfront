#!/bin/sh

find src -name "*.js" -not -name "*test.js" | xargs \
./node_modules/uglify-js/bin/uglifyjs --compress --mangle -- \
> app.min.js
