import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure/title-block';
import { BasicExampleComponent } from './basic/basic.component';
import { OffsetExampleComponent } from './offset/offset.component';
import { VerticalExampleComponent } from './vertical/vertical.component';
import { ReorganisationExampleComponent } from './reorganisation/reorganisation.component';
import { HorizontalExampleComponent } from './horizontal/horizontal.component';
import { AutoExampleComponent } from './auto/auto.component';
import SCSS_DOCS from '@ds-api/scss';
declare var require: any;
@Component({
	selector: 'ds-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Grid',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basic',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
				extra: 'Les grilles fonctionnent avec les valeurs définies dans les breakpoints de votre <a href="https://github.com/LuccaSA/lucca-front/#breakpoints" target="_blank">thème</a>. Par défaut les breakpoints sont <code class="code">-xs</code>, <code class="code">-sm</code>, <code class="code">-md</code>, <code class="code">-lg</code>, <code class="code">-xl</code> ou <code class="code">-xxl</code>'
			},
			{
				title: 'Offset',
				component: OffsetExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./offset/offset.component.html'),
			},
			{
				title: 'Largeur Auto',
				description: 'Supprimez les valeurs numériques pour diviser les colonnes uniformément.',
				component: AutoExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
		},
			{
				title: 'Alignement horizontal',
				component: HorizontalExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./offset/offset.component.html'),
			},
			{
				title: 'Alignement vertical',
				component: VerticalExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
			},
			{
				title: 'Réorganisation',
				description: 'Vous pouvez réorganiser les blocs d\'une grille grâce aux utilitaires.Cela permet de de changer l\'ordre des blocs en fonction de la résolution.',
				component: ReorganisationExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./offset/offset.component.html'),
			},
		],
		theme: SCSS_DOCS['breakpoints']
	};
	constructor() { }

	ngOnInit() {
	}

}
