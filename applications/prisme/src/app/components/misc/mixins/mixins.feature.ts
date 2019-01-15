import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-mixins',
	templateUrl: './mixins.feature.html',
})
export class MixinsFeature {
	infos: IFeatureInfos = {
		title: 'Mixins',
		examples: [
		],
		packages: [
			'SCSS'
		],
	};

	constructor(
		private themeService: ThemeDocumentationService,
	) {}
}
