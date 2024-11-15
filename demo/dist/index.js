"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const super_greeter_1 = require("super_greeter");
const super_greeter_browser_provider_1 = require("super_greeter_browser_provider");
const super_greeter_server_provider_1 = require("super_greeter_server_provider");
let provider = new super_greeter_browser_provider_1.GreetingProvider();
let greeter = new super_greeter_1.SuperGreeter(provider);
greeter.greet();
provider = new super_greeter_server_provider_1.GreetingProvider();
greeter = new super_greeter_1.SuperGreeter(provider);
greeter.greet();
