import { Component } from '@angular/core';
import { BasicExampleComponent } from './basic/basic.example';
import { IExample, IPageInfos } from '../../../commons/structure';
declare var require: any;

@Component({
	selector: 'ds-user-tile',
	templateUrl: './user-tile.component.html',
	styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent  {
	infos: IPageInfos = {
		title: 'User Tile',
		packages: ['NG'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				tsCode: require('!!prismjs-loader?lang=typescript!./basic/basic.example.ts'),
			},
		]
	};
	constructor() { }

}
