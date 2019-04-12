import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-toasts',
	templateUrl: './toasts.feature.html',
})
export class ToastsFeature {

	infos: IFeatureInfos = {
		title: 'Toasts',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				description: `Les toasts servent à afficher une information ou un callback dans un coin de l'application.`,
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: `Ce composant est destiné à rajoindre le package NG`
			},
		],
		theme: this.docApi.get('toasts')
	};
	constructor(private docApi: ThemeDocumentationService) { }
}
