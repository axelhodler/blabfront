#!/bin/sh

find src -path src/specs -prune -o -name "*.js" -not -name "*test.js" -print | xargs \
./node_modules/uglify-js/bin/uglifyjs --compress --mangle -- \
> app.min.js
