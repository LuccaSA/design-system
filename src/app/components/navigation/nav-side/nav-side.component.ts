import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';
import { BasicExampleComponent } from './basic/basic.example';
import { ItemStatesExampleComponent } from './item-states/item-states.example';
import { SubItemStatesExampleComponent } from './sub-item-states/sub-item-states.example';
import { CompactExampleComponent } from './compact/compact.example';
import { AlertExampleComponent } from './alert/alert.example';
import { LoaderExampleComponent } from './loader/loader.example';
import { DsDocApiService } from '../../../commons/doc-api';
import { MobileExampleComponent } from './mobile/mobile.example';
declare var require: any;

@Component({
	selector: 'ds-nav-side',
	templateUrl: './nav-side.component.html'
})
export class NavSideComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Menu principal',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Mode compact',
				component: CompactExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./compact/compact.example.html'),
			},
			{
				title: 'Item & état',
				component: ItemStatesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./item-states/item-states.example.html'),
			},
			{
				title: 'Sous-menu & état',
				component: SubItemStatesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./sub-item-states/sub-item-states.example.html'),
			},
			{
				title: 'Alertes / Notifications',
				component: AlertExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./alert/alert.example.html'),
			},
			{
				title: 'Loader / Placeholder',
				component: LoaderExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./loader/loader.example.html'),
			},
			{
				title: 'Mobile',
				description: `
				Pour gérer un affichage en mode mobile, il faut rajouter une
				<code class="code">&lt;div class="navSide-item mod-mobileToggle"&gt;</code><br>
				Pour déplier le menu, il faut ajouter la class <code class="code">.is-open</code> à la <code class="code">.navSide</code>
				`,
				component: MobileExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./mobile/mobile.example.html'),
			},
		],
		theme: this.docApi.theme('navSide')
	};

	constructor(private docApi: DsDocApiService) { }

	ngOnInit(): void { }
}
