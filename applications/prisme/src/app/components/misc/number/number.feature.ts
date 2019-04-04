import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'pri-number',
	templateUrl: './number.feature.html',
})
export class NumberFeature {
	infos: IFeatureInfos = {
		title: 'Nombre',
		description: `permet l'affichage de differents nombres alignes sur le chiffre des unite, meme si certains n'ont pas de partie decimale et d'autres en ont une`,
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
		],
		packages: [
			'NG',
		],
		pipe: this.docService.pipe('luNumber'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
