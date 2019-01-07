import { Component } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
declare var require: any;
@Component({
	selector: 'ds-menu',
	templateUrl: './menu.component.html',
	styleUrls: []
})
export class MenuComponent {
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
		theme: this.docApi.theme('palettes')
	};

	constructor( private docApi: DsDocApiService) { }
}
