import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-empty-states',
	templateUrl: './empty-states.feature.html',
})
export class EmptyStatesFeature {
	infos: IFeatureInfos = {
		title: 'Empty State',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			}
		]
	};
	constructor() { }
}
