import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
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
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
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
