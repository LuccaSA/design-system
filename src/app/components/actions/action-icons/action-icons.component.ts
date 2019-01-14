import { Component } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { StatusExampleComponent } from './status/status.example';
import { LoadingExample } from './loading/loading.example';
import { InvertedExample } from './inverted/inverted.example';
import { PalettesExample } from './palettes/palettes.example';
declare var require: any;

@Component({
	selector: 'ds-action-icons',
	templateUrl: './action-icons.component.html',
	styleUrls: ['./action-icons.component.scss']
})
export class ActionIconsComponent {
	infos: IFeatureInfos = {
		title: 'Icônes d\'action',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html')
			},
			{
				title: 'Disabled',
				component: StatusExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./status/status.example.html'),
				extra: `Vous pouvez désactiver un icon d'action avec la classe <code class= "code">is-disabled</code>, mais vous ne pourrez plus utiliser de tooltip`
			},
			{
				title: 'Chargement',
				component: LoadingExample,
				code: require('!!prismjs-loader?lang=markup!./loading/loading.example.html'),
			},
			{
				title: 'Inversé',
				component: InvertedExample,
				code: require('!!prismjs-loader?lang=markup!./inverted/inverted.example.html'),
			},
			{
				title: 'Palettes',
				component: PalettesExample,
				code: require('!!prismjs-loader?lang=markup!./palettes/palettes.example.html'),
				extra: `Les couleurs de votre palette sont éditables via votre <a href="https://github.com/LuccaSA/lucca-front/#palettes" target="_blank">thème</a>`
			}
		],
		theme: this.docApi.theme('actionIcon')
	};
	constructor(private docApi: DsDocApiService) { }

}
