import { Component, OnInit } from '@angular/core';
import { BasicExampleComponent } from './basic/basic.example';
import { UnkillableExampleComponent } from './unkillable/unkillable.example';
import { IFeatureInfos } from '@ds/commons';
declare var require: any;

@Component({
	selector: 'ds-chips',
	templateUrl: './chips.component.html',
	styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

	infos: IFeatureInfos = {
		title: 'Chip',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html')
			},
			{
				title: 'Unkillable',
				component: UnkillableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./unkillable/unkillable.example.html'),
				extra: 'Ce mod suffit à cacher le bouton de suppression',
			}
		]
	};

	constructor() {
	}

	ngOnInit() {}
}
