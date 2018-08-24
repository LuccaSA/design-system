import { Component, OnInit } from '@angular/core';
import { BasicExampleComponent } from './basic/basic.component';
import { UnkillableExampleComponent } from './unkillable/unkillable.component';
import { IPageInfos } from '../../../commons/structure/title-block';
declare var require: any;

@Component({
	selector: 'ds-chips',
	templateUrl: './chips.component.html',
	styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

	infos: IPageInfos = {
		title: 'Chip',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				description: 'A basic description on how you should use chips',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html')
			},
			{
				title: 'Unkillable',
				component: UnkillableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./unkillable/unkillable.component.html'),
				extra: 'Ce mod suffit à cacher le bouton de suppression',
			}
		]
	};

	constructor() {
	}

	ngOnInit() {}
}
