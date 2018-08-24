import { Component, Input, OnInit } from '@angular/core';
import { IExample } from './example.model';

@Component({
	selector: 'ds-examples-browser',
	templateUrl: './examples-browser.component.html',
	styleUrls: ['./examples-browser.component.scss']
})
export class ExamplesBrowserComponent implements OnInit {
	@Input() examples: Array<IExample>;
	selectedExample: IExample;

	constructor() { }

	ngOnInit() {
		if (this.examples.length > 0) {
			this.selectedExample = this.examples[0];
		}
	}

}
