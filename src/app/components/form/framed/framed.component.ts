import { Component, OnInit } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
declare var require: any;

@Component({
	selector: 'ds-framed',
	templateUrl: './framed.component.html',
	styleUrls: ['./framed.component.scss']
})
export class FramedComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Framed',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Basique',
				component: BasicExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./basic/basic.example.html'),
				extra: `
				Utilisez le mod <code class="code">form-group-line mod-selection</code>
				pour ajouter une bordure à votre ligne (ex. pour les checkbox ou les radios)<br>
				Utilisez le mod <code class="code">form-group-line mod-stacked</code> pour afficher vos radios ou vos checkbox verticalement
				`
			},
		]
	};
	constructor() { }

	ngOnInit() {
	}

}
