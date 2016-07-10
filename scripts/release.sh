#!/bin/sh

git checkout -b gh-pages
git merge master -m "merge master to prepare release"
npm install
npm run create_distributables
# NOTE (optional): we could replace the REST API url here
find . -maxdepth 1 ! -path . -not -name dist -not -name .git -not -name scripts -exec rm -rf {} \;
mv dist/* .
rm -rf scripts
git add .
git commit -m "release"
git push origin HEAD
git checkout master