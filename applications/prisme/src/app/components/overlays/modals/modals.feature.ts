import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-modals',
	templateUrl: './modals.feature.html',
})
export class ModalsFeature {
	infos: IFeatureInfos = {
		title: 'Modales et Dialogues',
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts'),
			},
		],
		packages: [
			'SCSS'
		],
	};
	constructor(private themeService: ThemeDocumentationService, ) {}
}
