import { Component, OnInit } from '@angular/core';
import { BasicExampleComponent } from './basic/basic.component';
import { IExample } from '../../../commons/examples-browser/example.model';
declare var require: any;

@Component({
	selector: 'ds-chips',
	templateUrl: './chips.component.html',
	styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

	public chipBasicCode =
`<div class="chip">
	Ned Stark
	<button class="chip-kill"></button>
</div>`;

	public chipUnkillable =
`<div class="chip mod-unkillable">
	Connor MacLeod
</div>`;

	basic: IExample = {
		component: BasicExampleComponent,
		code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html')
	};

	constructor() { }

	ngOnInit() {
	}

}
