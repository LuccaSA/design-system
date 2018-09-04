import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;

@Component({
	selector: 'ds-titles',
	templateUrl: './titles.component.html',
	styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Titre',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
		]
	};
	constructor() { }

	ngOnInit() {
	}

}
