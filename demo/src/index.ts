import { SuperGreeter } from 'super_greeter';
import { GreetingProvider as BrowserProvider } from 'super_greeter_browser_provider';
import { GreetingProvider as ServerProvider } from 'super_greeter_server_provider';


let provider = new BrowserProvider();
let greeter = new SuperGreeter(provider);
greeter.greet();

provider = new ServerProvider();
greeter = new SuperGreeter(provider);
greeter.greet();
