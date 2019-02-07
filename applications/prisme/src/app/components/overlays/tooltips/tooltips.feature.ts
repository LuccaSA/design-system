import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-tooltips',
	templateUrl: './tooltips.feature.html',
})
export class TooltipsFeature {
	infos: IFeatureInfos = {
		title: 'Tooltips',
		examples: [
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
