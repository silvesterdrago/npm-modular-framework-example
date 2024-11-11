interface GreetingProvider {
    greet(): void;
}
export declare class SuperGreeter {
    private provider;
    constructor(provider?: GreetingProvider | undefined);
    private getProvider;
    greet(): void;
}
export {};
