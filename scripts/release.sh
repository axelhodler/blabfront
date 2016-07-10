#!/bin/sh

set -e

git branch -D gh-pages
git checkout -b gh-pages
npm install
npm run create_distributables
find . -maxdepth 1 ! -path . -not -name dist -not -name .git -not -name scripts -exec rm -rf {} \;
mv dist/* .
sed -i '' 's#localhost:3000#gkapi.hodler.co:3000#g' app.min.js
rm -rf scripts
git add .
git commit -m "release"
git push origin gh-pages --force
git checkout master