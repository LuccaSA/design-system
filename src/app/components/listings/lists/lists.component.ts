import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { ClickableExampleComponent } from './clickable/clickable.example';
declare var require: any;

@Component({
	selector: 'ds-lists',
	templateUrl: './lists.component.html',
	styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Listes',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: 'Supprimez <code class="code">list-item-actions</code> pour laisser toute la largeur aux contenus'
			},
			{
				title: 'Clickable',
				component: ClickableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./clickable/clickable.example.html'),
				extra: `Placez la zone cliquable sur <code class="code">list-item</code><br>
				Pour éviter un clic à la fois sur <code class="code">list-item</code> et <code class="code">actionIcon</code>, vous pouvez appliquer <code class="code">.preventDefault()</code> & <code class="code">.stopPropagation()</code> sur <code class="code">actionIcon</code><br>
				Il est possible d'utiliser une structure en <code class="code">div</code>/<code class="code">a</code>`
			},
		],
		theme: this.docApi.theme('list')
	};
	constructor(private docApi: DsDocApiService) { }

	ngOnInit() {
	}

}
