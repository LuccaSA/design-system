import { Component } from '@angular/core';
import { BasicExampleComponent } from './basic/basic.component';
declare var require: any;

@Component({
	selector: 'ds-user-tile',
	templateUrl: './user-tile.component.html',
	styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent  {
	public basicCode = require('!!prismjs-loader?lang=markup!./basic/basic.component.html');
	public basicTsCode = require('!!prismjs-loader?lang=typescript!./basic/basic.component.ts');

	basic = {
		title: 'Basic',
		component: BasicExampleComponent,
		code: this.basicCode,
		tsCode: this.basicTsCode };
	constructor() { }

}
