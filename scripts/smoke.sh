#!/bin/sh

npm run lint
npm test
npm run create_distributables
npm run json-server & \
npm run start-dist & \
npm run protractor

# cleanup
git checkout api.json
npm run kill-json-server
npm run kill-server