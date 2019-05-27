import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { DisplayerExample } from './displayer/displayer.example';
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
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
			{
				title: 'Affichage personnalisé',
				component: DisplayerExample,
				description: `Vous pouvez personnaliser l'affichage du select en fournissant un DOM
				portant la directive <code class="code">*luDisplayer</code>`,
				code: require('!!prismjs-loader?lang=markup!./displayer/displayer.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./displayer/displayer.example.ts')
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
