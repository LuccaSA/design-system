import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { PrecisionExample } from './precision/precision.example';
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
				extra: `l'utilisation doit se faire sur un innerHTML`
			},
			{
				title: 'precision',
				component: PrecisionExample,
				code: require('!!prismjs-loader?lang=markup!./precision/precision.example.html'),
				extra: `l'utilisation doit se faire sur un innerHTML`
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
