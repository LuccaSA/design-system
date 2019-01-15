import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-typographic-rules',
	templateUrl: './typographic-rules.feature.html',
})
export class TypographicRulesFeature {
	infos: IFeatureInfos = {
		title: 'Règles typographiques',
		examples: [
		],
		packages: [
			
			
		],
		
		// 
	};

	constructor(
		private themeService: ThemeDocumentationService,
	) {}
}
