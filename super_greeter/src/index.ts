interface GreetingProvider {
    greet(): void;
}

export class SuperGreeter {

    private provider: GreetingProvider | null = null;

    constructor(provider: GreetingProvider | undefined = undefined) {
        if (provider) {
            this.provider = provider;
        } else {
            this.provider = this.getProvider();
        }
    }

    private getProvider(): GreetingProvider | null {
        const providers = ['super_greeter_browser_provider', 'super_greeter_server_provider'];

        for (const provider of providers) {
            try {
                const loadedProvider = require(provider);
                return new loadedProvider.GreetingProvider()
            } catch (e) {
                console.error(`Error loading ${provider}`);
            }
        }
        console.warn('No provider found. Please install one of the supported providers.');
        return null;
    }

    public greet(): void {
        this.provider!.greet();
    }
}
