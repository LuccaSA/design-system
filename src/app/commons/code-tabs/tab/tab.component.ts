import { Component, Input } from '@angular/core';

@Component({
	selector: 'ds-tab',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss']
})
export class TabComponent {
	@Input() tabTitle: string;
	@Input() active = false;

	constructor() { }
}
