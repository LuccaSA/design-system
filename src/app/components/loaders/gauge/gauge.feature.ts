import { Component } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExample } from './basic/basic.example';
import { WeightExample } from './weight/weight.example';
import { PalettesExample } from './palettes/palettes.example';
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
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Weight',
				component: WeightExample,
				code: require('!!prismjs-loader?lang=markup!./weight/weight.example.html'),
			},
			{
				title: 'Palettes',
				component: PalettesExample,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				extra: `Les couleurs de votre palette sont éditables via votre <a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>`
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
