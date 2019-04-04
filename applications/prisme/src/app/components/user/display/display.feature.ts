import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { FormatExample } from './format/format.example';
declare var require: any;
@Component({
	selector: 'pri-display',
	templateUrl: './display.feature.html',
})
export class DisplayFeature {
	infos: IFeatureInfos = {
		title: 'Display',
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts')
			},
			{
				title: 'format',
				component: FormatExample,
				code: require('!!prismjs-loader?lang=markup!./format/format.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./format/format.example.ts')
			},
		],
		packages: [
			'NG',
		],
		pipe: this.docService.pipe('luUserDisplay'),
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
