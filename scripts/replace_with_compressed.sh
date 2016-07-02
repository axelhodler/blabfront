#!/bin/sh

./node_modules/replace/bin/replace.js \
'<!--begin_replace-->(.|\n)*<!--end-->' \
'<script src="app.min.js"></script>' \
index.html