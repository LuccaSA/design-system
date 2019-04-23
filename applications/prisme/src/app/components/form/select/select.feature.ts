import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-select',
	templateUrl: './select.feature.html',
})
export class SelectFeature {
	infos: IFeatureInfos = {
		title: 'Select',
		description: "Les selects permettent de choisir une ou plusieurs options parmi une liste d'options. Ils sont particulièrement utiles dans le cas d'un large choix.",
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
		],
		packages: [
			'NG',
		],
		component: this.docService.component('LuSelectInputComponent'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
