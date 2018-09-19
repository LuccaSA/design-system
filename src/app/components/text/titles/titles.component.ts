import { Component, OnInit } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;

@Component({
	selector: 'ds-titles',
	templateUrl: './titles.component.html',
	styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Titre',
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
