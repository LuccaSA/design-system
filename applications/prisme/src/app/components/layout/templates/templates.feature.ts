import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';
declare var require: any;
@Component({
	selector: 'pri-templates',
	templateUrl: './templates.feature.html',
})
export class TemplatesFeature {
	infos: IFeatureInfos = {
		title: 'Templates',
		examples: [
		],
		packages: [
			'SCSS'
		],
	};
}
