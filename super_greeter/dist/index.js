"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperGreeter = void 0;
class SuperGreeter {
    constructor(provider) {
        this.provider = null;
        if (provider) {
            this.provider = provider;
        }
    }
    greet() {
        this.provider.greet();
    }
}
exports.SuperGreeter = SuperGreeter;
