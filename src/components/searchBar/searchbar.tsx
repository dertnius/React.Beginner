import {alertSearchBar} from './searchbar-info';
export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return {alertSearchBar}.alertSearchBar + this.greeting;
    }
}
