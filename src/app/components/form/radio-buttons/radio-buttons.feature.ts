import { Component } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'ds-radio-buttons-feature',
	templateUrl: './radio-buttons.feature.html',
})
export class RadioButtonsFeature {
	infos: IFeatureInfos = {
		title: 'RadioButtons',
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
		private docApi: DsDocApiService,
	) {}
}
