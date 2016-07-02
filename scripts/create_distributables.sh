#!/bin/sh

npm run compress
npm run replace_with_compressed

rm -rf dist
mkdir dist
cp app.min.js dist
cp index.html dist
find src -name '*.html' -exec rsync -R {} dist \;
rsync -r vendor dist

git checkout index.html