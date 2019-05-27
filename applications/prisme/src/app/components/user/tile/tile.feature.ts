import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { DisplayFormatExample } from './display-format/display-format.example';
declare var require: any;
@Component({
	selector: 'pri-tile',
	templateUrl: './tile.feature.html',
})
export class TileFeature {
	infos: IFeatureInfos = {
		title: 'Tile',
		description: "LuUserTile sert à afficher une tuile collaborateur avec sa photo, son prénom, son nom et toutes sortes d'options.",
		examples: [
			{
				title: 'Basique',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
			{
				title: 'DisplayFormat',
				component: DisplayFormatExample,
				description: `Vous pouvez changer le formatage du nom en utilisant
				l'input <code class="code">displayFormat</code> pour préciser un format <code class="code">luUserDisplay</code>`,
				code: require('!!prismjs-loader?lang=markup!./display-format/display-format.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./display-format/display-format.example.ts')
			},
		],
		packages: [
			'NG',
		],
		component: this.docService.component('LuUserTileComponent'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
