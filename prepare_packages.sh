#!/bin/bash
#

cd super_greeter_browser_provider
npm i && npm run build && npm run publish_local
cd ../super_greeter_server_provider
npm i && npm run build && npm run publish_local
cd ../super_greeter
npm i && npm run build && npm run publish_local
cd ..
