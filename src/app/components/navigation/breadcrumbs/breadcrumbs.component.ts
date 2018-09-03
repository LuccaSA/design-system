import { Component, OnInit } from '@angular/core';
import { BasicExampleComponent } from './basic/basic.example';
import { IPageInfos } from '../../../commons/structure';
declare var require: any;

@Component({
	selector: 'ds-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Menu',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html')
			},
		]
	};
	constructor() { }

	ngOnInit() {
	}

}
