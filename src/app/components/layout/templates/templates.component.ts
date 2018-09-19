import { Component, OnInit } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';

@Component({
	selector: 'ds-templates',
	templateUrl: './templates.component.html',
	styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Templates',
		packages: ['SCSS'],
	};
	constructor() { }

	ngOnInit() {
	}

}
