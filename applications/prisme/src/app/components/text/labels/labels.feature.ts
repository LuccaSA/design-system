import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;

@Component({
	selector: 'pri-labels',
	templateUrl: './labels.feature.html',
})
export class LabelsFeature {
	infos: IFeatureInfos = {
		title: 'Labels',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
		],
		theme: this.docApi.theme('label')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
