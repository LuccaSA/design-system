import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
declare var require: any;
@Component({
	selector: 'pri-menu',
	templateUrl: './menu.feature.html',
})
export class MenuFeature {
	infos: IFeatureInfos = {
		title: 'Menu',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html')
			},
			{
				title: 'Palettes',
				component: PalettesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				extra: 'Les couleurs de votre palette sont éditables via votre <a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>'
			},
		],
		theme: this.docApi.get('palettes')
	};

	constructor( private docApi: ThemeDocumentationService) { }
}
