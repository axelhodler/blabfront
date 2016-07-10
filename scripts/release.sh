#!/bin/sh

set -e

git branch -D gh-pages
git checkout -b gh-pages
npm install
npm run create_distributables
# NOTE (optional): we could replace the REST API url here
find . -maxdepth 1 ! -path . -not -name dist -not -name .git -not -name scripts -exec rm -rf {} \;
mv dist/* .
rm -rf scripts
git add .
git commit -m "release"
git push origin gh-pages --force
git checkout master