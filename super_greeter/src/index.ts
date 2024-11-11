interface GreetingProvider {
    greet(): void;
}

export class SuperGreeter {

    private provider: GreetingProvider | null = null;

    constructor(provider: GreetingProvider | undefined) {
        if (provider) {
            this.provider = provider;
        }
    }

    public greet(): void {
        this.provider!.greet();
    }
}
