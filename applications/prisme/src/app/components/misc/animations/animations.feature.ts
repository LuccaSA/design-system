import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { EnterExampleComponent } from './enter/enter.example';
import { ExitExampleComponent } from './exit/exit.example';
declare var require: any;

@Component({
	selector: 'pri-animations',
	templateUrl: './animations.feature.html',
	styleUrls: ['./animations.feature.scss']
})
export class AnimationsFeature {
	infos: IFeatureInfos = {
		title: 'Animations',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Apparition',
				description: `Cliquez pour voir l'animation`,
				component: EnterExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./enter/enter.example.html'),
			},
			{
				title: 'Disparition',
				description: `Cliquez pour voir l'animation`,
				component: ExitExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./exit/exit.example.html'),
			},
		],
		theme: this.themeService.get('animations')
	};
	constructor(protected themeService: ThemeDocumentationService) { }
}
