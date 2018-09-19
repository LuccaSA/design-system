import { Component, OnInit } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';
import { EnterExampleComponent } from './enter/enter.example';
import { ExitExampleComponent } from './exit/exit.example';
declare var require: any;

@Component({
	selector: 'ds-animations',
	templateUrl: './animations.component.html',
	styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Animations',
		packages: ['SCSS'],
		examples: [
			{
				title: 'Apparition',
				description: `Cliquez pour voir l'animation`,
				component: EnterExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./enter/enter.example.html'),
			},
			{
				title: 'Disparition',
				description: `Cliquez pour voir l'animation`,
				component: ExitExampleComponent,
				code: require('!!prismjs-loader?lang=markup!./exit/exit.example.html'),
			},
		]
	};
	constructor() { }

	ngOnInit() {
	}

	public animate() {
	}
}
