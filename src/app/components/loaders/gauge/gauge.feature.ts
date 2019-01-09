import { Component } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'ds-gauge-feature',
	templateUrl: './gauge.feature.html',
})
export class GaugeFeature {
	infos: IFeatureInfos = {
		title: 'Gauge',
		examples: [
			{
				title: 'Basique',
				component: BasicExample
			,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
		],
		packages: [
			'SCSS',
		],
		theme: this.docApi.theme('gauge'),
	};

	constructor(
		private docApi: DsDocApiService,
	) {}
}
