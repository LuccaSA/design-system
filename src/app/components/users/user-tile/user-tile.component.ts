import { Component } from '@angular/core';
import { BasicExampleComponent } from './basic/basic.component';
import { IExample } from '../../../commons/structure/examples-browser/example.model';
declare var require: any;

@Component({
	selector: 'ds-user-tile',
	templateUrl: './user-tile.component.html',
	styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent  {
	public basicCode = require('!!prismjs-loader?lang=markup!./basic/basic.component.html');
	public basicTsCode = require('!!prismjs-loader?lang=typescript!./basic/basic.component.ts');

	basic: IExample = {
		title: 'Basic',
		component: BasicExampleComponent,
		code: this.basicCode,
		tsCode: this.basicTsCode
	};

	examples: Array<IExample> = [this.basic];
	constructor() { }

}
