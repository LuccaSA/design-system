import { Component, OnInit } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;
@Component({
	selector: 'ds-toasts',
	templateUrl: './toasts.component.html',
	styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {

	infos: IFeatureInfos = {
		title: 'Toasts',
		packages: ['SCSS', 'NG'],
		examples: [
			{
				title: 'Basique',
				description: `Les toasts vous permettent d'afficher une information ou un callback dans un coin de l'application.`,
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
			},
		],
		theme: this.docApi.theme('toasts')
	};
	constructor(private docApi: DsDocApiService) { }

	ngOnInit() {
	}

}
