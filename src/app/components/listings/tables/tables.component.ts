import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.component';
import { ZebraExampleComponent } from './zebra/zebra.component';
import { ClickableExampleComponent } from './clickable/clickable.component';
import { SortableExampleComponent } from './sortable/sortable.component';
import { ActionsExampleComponent } from './actions/actions.component';
import { CardExampleComponent } from './card/card.component';
import { FiltersExampleComponent } from './filters/filters.component';
declare var require: any;

@Component({
	selector: 'ds-tables',
	templateUrl: './tables.component.html',
	styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Tables',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
				extra: `Vous pouvez aligner en haut le contenu des cellules via le mod <code class="code">table mod-alignTop</code>`
			},
			{
				title: 'Zèbre',
				component: ZebraExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./zebra/zebra.component.html'),
			},
			{
				title: 'Cliquable',
				component: ClickableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./clickable/clickable.component.html'),
				extra: `Vous pouvez utiliser une structure en <code class="code">div</code> et <code class="code">a</code> pour avoir des liens HTML sur une rangée ou une cellule`
			},
			{
				title: 'Triable',
				component: SortableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sortable/sortable.component.html'),
			},
			{
				title: 'Actions',
				component: ActionsExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./actions/actions.component.html'),
			},
			{
				title: 'Card',
				description: `Pour utiliser une table dans une carte, placez là hors du <code class="code">card-content</code> et ajoutez-y une classe <code class="code">mod-card</code>.`,
				component: CardExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./card/card.component.html'),
			},
			{
				title: 'Filtres',
				description: `Vous pouvez une utiliser une classe <code class="code">mod-filters</code> sur la première rangée d'une table pour y placer des filtres.`,
				component: FiltersExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./filters/filters.component.html'),
			},
		],
		theme: this.docApi.theme('table')
	};
	constructor(private docApi: DsDocApiService) { }

	ngOnInit() {
	}

}
