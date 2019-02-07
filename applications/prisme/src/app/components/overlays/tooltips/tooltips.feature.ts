import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
import { BasicExample } from './basic/basic.example';
import { DisabledExample } from './disabled/disabled.example';
declare var require: any;
@Component({
	selector: 'pri-tooltips',
	templateUrl: './tooltips.feature.html',
})
export class TooltipsFeature {
	infos: IFeatureInfos = {
		title: 'Tooltips',
		examples: [
			{
				title: 'basic',
				component: BasicExample,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'disabled',
				component: DisabledExample,
				code: require('!!prismjs-loader?lang=markup!./disabled/disabled.example.html'),
			},
		],
		packages: [
			
			'NG',
		],
		
		directive: this.docService.directive('LuTooltipTriggerDirective'),
		
		
		
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
