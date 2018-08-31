import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';
import { BasicExampleComponent } from './basic/basic.component';
import { ToggleExampleComponent } from './toggle/toggle.component';
import { KillableExampleComponent } from './killable/killable.component';
import { DsDocApiService } from '../../../commons/doc-api';
declare var require: any;

@Component({
	selector: 'ds-boxes',
	templateUrl: './boxes.component.html',
	styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Boîte',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.component.html'),
			},
			{
				title: 'Toggle',
				description: `Les boxes peuvent être associées à un <a routerLink="/components/switches">switch</a> comme contenu masquable.`,
				component: ToggleExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./toggle/toggle.component.html'),
			},
			{
				title: 'Supprimable',
				component: KillableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./killable/killable.component.html'),
			},
		],
		theme: this.docApi.theme('box')
	};

	constructor(private docApi: DsDocApiService) { }

	ngOnInit() {
	}

}
