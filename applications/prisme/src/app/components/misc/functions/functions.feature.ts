import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-functions',
	templateUrl: './functions.feature.html',
})
export class FunctionsFeature {
	infos: IFeatureInfos = {
		title: 'Fonctions de thème',
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
