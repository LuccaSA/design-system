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
				Les checkboxes sont un cas particulier ici. Elles sont isolées
				et doivent porter le mod <code class="code">mod-field</code> pour fonctionner<br>
				En rajoutant sur la <code class="code">checkbox</code> la classe <code class="code">is-offset</code>
				vous pouvez aligner la checkbox avec le contenu d'un input avec label
				`
			},
		]
	};
	constructor() { }

	ngOnInit() {
	}

}
