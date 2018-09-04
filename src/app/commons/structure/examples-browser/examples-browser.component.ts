import { Component, Input, OnInit } from '@angular/core';
import { IExample } from './example.model';
import { DsExampleService } from './example.service';

@Component({
	selector: 'ds-examples-browser',
	templateUrl: './examples-browser.component.html',
	styleUrls: ['./examples-browser.component.scss']
})
export class ExamplesBrowserComponent implements OnInit {
	@Input() examples: Array<IExample>;
	selectedExample: IExample;

	constructor(private exService: DsExampleService) {}

	ngOnInit() {
		this.selectedExample = this.exService.getCurrentExample(this.examples);
	}

	onModelChange() {
		this.exService.setCurrentExample(this.selectedExample);
	}



}
