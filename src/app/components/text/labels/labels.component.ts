import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';
import { BasicExampleComponent } from './basic/basic.component';
declare var require: any;

@Component({
	selector: 'ds-labels',
	templateUrl: './labels.component.html',
	styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Labels',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
			},
		]
	};
	constructor() { }

	ngOnInit() {
	}

}
