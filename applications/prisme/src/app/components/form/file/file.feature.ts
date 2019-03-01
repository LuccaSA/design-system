import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';
import { StatesExampleComponent } from './states/states.example';
import { CompactExampleComponent } from './compact/compact.example';
declare var require: any;

@Component({
	selector: 'pri-file',
	templateUrl: './file.feature.html',
})
export class FileFeature {
	infos: IFeatureInfos = {
		title: 'Fichier',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Etats',
				component: StatesExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./states/states.example.html'),
				mod: 'white',
			},
			{
				title: 'Compact',
				description: `Une version plus petite, pour les formulaires existe via la class <code class="code">file mod-small</code>.`,
				component: CompactExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./compact/compact.example.html'),
				mod: 'white',
			},
		]
	};
}
