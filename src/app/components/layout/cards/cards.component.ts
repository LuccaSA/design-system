import { Component, OnInit } from '@angular/core';
import { ClickableExampleComponent } from './clickable/clickable.component';
import { FooterExampleComponent } from './footer/footer.component';
import { GreyExampleComponent } from './grey/grey.component';
import { DisabledExampleComponent } from './disabled/disabled.component';
import { IPageInfos } from '../../../commons/structure';
import { BasicExampleComponent } from './basic/basic.component';
import { DsDocApiService } from '../../../commons/doc-api';
declare var require: any;
@Component({
	selector: 'ds-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Carte',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
			},
			{
				title: 'Cliquable',
				component: ClickableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./clickable/clickable.component.html'),
			},
			{
				title: 'Avec footer',
				component: FooterExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./footer/footer.component.html'),
			},
			{
				title: 'Grisée',
				component: GreyExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./grey/grey.component.html'),
			},
			{
				title: 'Désactivée',
				component: DisabledExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./disabled/disabled.component.html'),
			},
		],
		theme: this.docApi.theme('card')
	};

	constructor(private docApi: DsDocApiService) {}

	ngOnInit() {
	}

}
