"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperGreeter = void 0;
class SuperGreeter {
    constructor(provider = undefined) {
        this.provider = null;
        if (provider) {
            this.provider = provider;
        }
        else {
            this.provider = this.getProvider();
        }
    }
    getProvider() {
        const providers = ['super_greeter_browser_provider', 'super_greeter_server_provider'];
        for (const provider of providers) {
            try {
                const loadedProvider = require(provider);
                return new loadedProvider.GreetingProvider();
            }
            catch (e) {
                console.error(`Error loading ${provider}`);
            }
        }
        console.warn('No provider found. Please install one of the supported providers.');
        return null;
    }
    greet() {
        this.provider.greet();
    }
}
exports.SuperGreeter = SuperGreeter;
