#!/bin/sh

npm run lint
npm run json-server & \
npm start & \
npm test
npm run protractor

# cleanup
git checkout -- api.json
npm run kill-json-server
npm run kill-server

