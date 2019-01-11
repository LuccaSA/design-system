import { Component, OnInit } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { LabelExampleComponent } from './label/label.example';
import { BlockExampleComponent } from './block/block.example';
import { BigExample } from './big/big.example';
import { FullPageExample } from './full-page/full-page.example';
import { InvertedExampleComponent } from './inverted/inverted.example';
declare var require: any;

@Component({
	selector: 'ds-loadings',
	templateUrl: './loadings.component.html',
	styleUrls: ['./loadings.component.scss']
})
export class LoadingsComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Loaders',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Avec label',
				component: LabelExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./label/label.example.html'),
			},
			{
				title: 'Block',
				description: `Le mod "block" permet d'afficher un chargement sur une section entière.`,
				component: BlockExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./block/block.example.html'),
			},
			{
				title: 'Gros',
				component: BigExample,
				code: require('!!prismjs-loader?lang=markup!./big/big.example.html'),
			},
			{
				title: 'Pleine page',
				component: FullPageExample,
				code: require('!!prismjs-loader?lang=markup!./full-page/full-page.example.html'),
			},
			{
				title: 'Inversé',
				component: InvertedExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./inverted/inverted.example.html'),
			},
		]
	};
	constructor() { }

	ngOnInit() {
	}

}
