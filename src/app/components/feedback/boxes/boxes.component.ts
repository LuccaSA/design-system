import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { ToggleExampleComponent } from './toggle/toggle.example';
import { KillableExampleComponent } from './killable/killable.example';
declare var require: any;

@Component({
	selector: 'ds-boxes',
	templateUrl: './boxes.component.html',
	styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Box',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
			{
				title: 'Toggle',
				description: `Les boxes peuvent être associées à un <a routerLink="/components/switches">switch</a> comme contenu masquable.`,
				component: ToggleExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./toggle/toggle.example.html'),
			},
			{
				title: 'Supprimable',
				component: KillableExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./killable/killable.example.html'),
			},
		],
		theme: this.docApi.theme('box')
	};

	constructor(private docApi: DsDocApiService) { }

	ngOnInit() {
	}

}
