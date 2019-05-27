import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { DisplayerExample } from './displayer/displayer.example';
import { ClearerExample } from './clearer/clearer.example';
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
				description: `Le select basique permet l'affichage d'un input select avec une liste fixe.
				Si vous cherchez à récupérer la liste depuis une API, dirigez vous vers l'API ou le User Select.`,
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
			{
				title: 'Clearer',
				component: ClearerExample,
				description: `En rajoutant un opérateur <code class="code">lu-select-clearer</code>
				en fin de select, vous permettez l'affichage d'un simple clearer pour vider l'input`,
				code: require('!!prismjs-loader?lang=markup!./clearer/clearer.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./clearer/clearer.example.ts')
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
