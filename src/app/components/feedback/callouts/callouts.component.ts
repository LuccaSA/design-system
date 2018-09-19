import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { TitleExampleComponent } from './title/title.example';
import { KillableExampleComponent } from './killable/killable.example';
import { IconsExampleComponent } from './icons/icons.example';
declare var require: any;

@Component({
	selector: 'ds-callouts',
	templateUrl: './callouts.component.html',
	styleUrls: ['./callouts.component.scss']
})
export class CalloutsComponent implements OnInit {

	infos: IFeatureInfos = {
		title: 'Callouts',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Palettes',
				component: PalettesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				extra: `Les couleurs de votre palette sont éditables via votre <a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>`
			},
			{
				title: 'Titre',
				component: TitleExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./title/title.example.html'),
			},
			{
				title: 'Supprimable',
				component: KillableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./killable/killable.example.html'),
			},
			{
				title: 'Icones',
				component: IconsExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./icons/icons.example.html'),
			},
		],
		theme: this.docApi.theme('callout')
	};
	constructor(private docApi: DsDocApiService) { }

	ngOnInit() {
	}

}
