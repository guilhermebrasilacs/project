import { templateSourceUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'hello',
    template: `
    <h2>
        Welcome to {{company}}
    </h2>
    `
})
export class HelloComponent{
    company = "ACS";
}