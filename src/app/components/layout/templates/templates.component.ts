import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure/title-block';

@Component({
	selector: 'ds-templates',
	templateUrl: './templates.component.html',
	styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Templates',
		packages: ['SCSS'],
	};
	constructor() { }

	ngOnInit() {
	}

}
