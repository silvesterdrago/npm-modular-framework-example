#!/bin/bash

prepare_package() {
    package_path=$1
    cd "$package_path" || exit
    npm i && npm run build && npm run publish_local
    cd ..
}

prepare_package "super_greeter_browser_provider"
prepare_package "super_greeter_server_provider"
prepare_package "super_greeter"
