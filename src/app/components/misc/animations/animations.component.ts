import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';
import { EnterExampleComponent } from './enter/enter.example';
import { ExitExampleComponent } from './exit/exit.example';
declare var require: any;

@Component({
	selector: 'ds-animations',
	templateUrl: './animations.component.html',
	styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {
	infos: IPageInfos = {
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
