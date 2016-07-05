#!/bin/sh

./node_modules/replace/bin/replace.js \
'<!--begin_replace-->(.|\n)*<!--end-->' \
'<script src="app.min.js"></script>' \
index.html

MINIFIED_DEPS=$(find vendor -name '*.min.js' -exec echo '<script src="'{}'"></script>' \;)
./node_modules/replace/bin/replace.js \
'<!--begin_w_min-->(.|\n)*<!--end-->' \
"$MINIFIED_DEPS" \
index.html