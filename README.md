
# NPM Modular Package Example

**NPM Modular Package Example** is a TypeScript-based framework designed to demonstrate a modular approach using a core package with different provider packages for specific environments like browsers and servers.

## Requirements

- **Node.js** version 14 or higher
- **npm** version 6 or higher
- A **local npm registry** (e.g., [Verdaccio](https://verdaccio.org/)) for local package testing. You can find an example Verdaccio configuration [here](https://github.com/silvesterdrago/local-npm-repo-config).

## Installation

### Setting the NPM Registry

```bash
npm config set registry http://localhost:4873
```

### Publishing the SDK Packages to a Local NPM Registry

1. **Run the `prepare_packages.sh` script**:
   Use the provided script to build and publish all packages to the local npm registry automatically.
   ```bash
   ./prepare_packages.sh
   ```

   This script will:
   - Build each package (`super_greeter`, `super_greeter_browser_provider`, `super_greeter_server_provider`).
   - Publish each package to the configured local npm registry (e.g., `http://localhost:4873`).

### Installing Packages in Demo Applications

1. **Navigate to a demo** directory (e.g., `demo`, `demo_implicit_browser`, etc.).
2. **Install packages and build the app**:
   ```bash
   npm install
   npm run build
   npm run start
   ```

## Usage Examples

### Explicit Provider Selection (`demo`)

```typescript
import SuperGreeter from 'super_greeter';
import { GreetingProvider } from 'super_greeter_browser_provider';

const greeter = new SuperGreeter(new GreetingProvider());
greeter.greet(); // Outputs: "Greet from browser"
```

### Implicit Provider Selection (`demo_implicit_browser` and `demo_implicit_server`)

The framework can automatically select a provider if one is installed. For this to work, you must install the required provider package in the application:

```typescript
import SuperGreeter from 'super_greeter';

const greeter = new SuperGreeter();
greeter.greet(); // Outputs provider-specific message based on installed provider
```

**Note**: Ensure that you install the appropriate provider package (e.g., `super_greeter_browser_provider` or `super_greeter_server_provider`) in your application for the implicit selection to function correctly:

```bash
npm install super_greeter_browser_provider --registry http://localhost:4873
```

### Failure Case (`demo_failure`)

Demonstrates the framework behavior when no provider is installed:

```typescript
import SuperGreeter from 'super_greeter';

const greeter = new SuperGreeter();
greeter.greet(); // Outputs: "No provider found. Please install one of the supported providers."
```

## License

This project is licensed under the [MIT License](LICENSE).
