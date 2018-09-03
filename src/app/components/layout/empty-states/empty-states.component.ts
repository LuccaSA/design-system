import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'ds-empty-states',
	templateUrl: './empty-states.component.html',
	styleUrls: ['./empty-states.component.scss']
})
export class EmptyStatesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Empty State',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			}
		]
	};
	constructor() { }

	ngOnInit() {
	}

}
