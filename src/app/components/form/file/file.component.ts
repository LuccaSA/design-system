import { Component, OnInit } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';
import { StatesExampleComponent } from './states/states.example';
import { CompactExampleComponent } from './compact/compact.example';
declare var require: any;

@Component({
	selector: 'ds-file',
	templateUrl: './file.component.html',
	styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Fichier',
		packages: ['SCSS', 'NG'],
		examples: [
			{
				title: 'Etats',
				component: StatesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./states/states.example.html'),
			},
			{
				title: 'Compact',
				description: `Une version plus petite, pour les formulaires existe via la class <code class="code">file mod-small</code>.`,
				component: CompactExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./compact/compact.example.html'),
			},
		]
	};
	constructor() { }

	ngOnInit() {
	}

}
