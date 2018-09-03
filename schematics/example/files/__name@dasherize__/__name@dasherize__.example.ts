import { Component } from '@angular/core';

@Component({
	selector: 'ds-<%=dasherize(name)%>-example',
	templateUrl: './<%=dasherize(name)%>.example.html'
})
export class <%= classify(name) %>ExampleComponent {
	constructor() { }
}
