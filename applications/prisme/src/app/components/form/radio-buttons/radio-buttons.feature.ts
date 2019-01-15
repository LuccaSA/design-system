import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-radio-buttons',
	templateUrl: './radio-buttons.feature.html',
})
export class RadioButtonsFeature {
	infos: IFeatureInfos = {
		title: 'Boutons radios',
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: `Peut être utilisé comme checkbox`
			},
		],
		packages: [
			'SCSS',
		],
		theme: this.docApi.theme('radioButtons'),
	};

	constructor(
		private docApi: ThemeDocumentationService,
	) {}
}
