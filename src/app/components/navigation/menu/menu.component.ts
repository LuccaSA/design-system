import { Component, OnInit } from '@angular/core';
import { DsDocApiService } from '../../../commons/doc-api';
import { IPageInfos } from '../../../commons/structure';
import { BasicExampleComponent } from './basic/basic.component';
import { PalettesExampleComponent } from './palettes/palettes.component';
declare var require: any;
@Component({
  selector: 'ds-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Menu',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html')
			},
			{
				title: 'Palettes',
				component: PalettesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.component.html'),
				extra: 'Les couleurs de votre palette sont éditables via votre <a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>'
			},
		],
		theme: this.docApi.theme('palettes')
	};

  constructor( private docApi: DsDocApiService) { }

  ngOnInit() {
  }

}
