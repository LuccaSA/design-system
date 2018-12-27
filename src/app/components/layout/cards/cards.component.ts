import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { ClickableExampleComponent } from './clickable/clickable.example';
import { FooterExampleComponent } from './footer/footer.example';
import { GreyExampleComponent } from './grey/grey.example';
import { DisabledExampleComponent } from './disabled/disabled.example';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'ds-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Carte',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Cliquable',
				component: ClickableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./clickable/clickable.example.html'),
			},
			{
				title: 'Avec footer',
				component: FooterExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./footer/footer.example.html'),
			},
			{
				title: 'Grisée',
				component: GreyExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./grey/grey.example.html'),
			},
			{
				title: 'Désactivée',
				component: DisabledExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./disabled/disabled.example.html'),
			},
		],
		theme: this.docApi.theme('card')
	};

	constructor(private docApi: DsDocApiService) {}

	ngOnInit() {
	}

}
