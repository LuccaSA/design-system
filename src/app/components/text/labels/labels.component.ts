import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';
import { BasicExampleComponent } from './basic/basic.example';
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
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
		]
	};
	constructor() { }

	ngOnInit() {
	}

}
