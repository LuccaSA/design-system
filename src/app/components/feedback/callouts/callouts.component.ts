import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';
import { BasicExampleComponent } from './basic/basic.component';
import { PalettesExampleComponent } from './palettes/palettes.component';
import { TitleExampleComponent } from './title/title.component';
import { KillableExampleComponent } from './killable/killable.component';
import { IconsExampleComponent } from './icons/icons.component';
import { DsDocApiService } from '../../../commons/doc-api';
declare var require: any;

@Component({
	selector: 'ds-callouts',
	templateUrl: './callouts.component.html',
	styleUrls: ['./callouts.component.scss']
})
export class CalloutsComponent implements OnInit {

	infos: IPageInfos = {
		title: 'Callouts',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
			},
			{
				title: 'Palettes',
				component: PalettesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.component.html'),
				extra: `Les couleurs de votre palette sont éditables via votre <a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>`
			},
			{
				title: 'Titre',
				component: TitleExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./title/title.component.html'),
			},
			{
				title: 'Supprimable',
				component: KillableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./killable/killable.component.html'),
			},
			{
				title: 'Icones',
				component: IconsExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./icons/icons.component.html'),
			},
		],
		theme: this.docApi.theme('callout')
	};
	constructor(private docApi: DsDocApiService) { }

	ngOnInit() {
	}

}
