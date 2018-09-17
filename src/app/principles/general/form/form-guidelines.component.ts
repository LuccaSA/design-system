import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons';

@Component({
	selector: 'ds-form-guidelines',
	templateUrl: './form-guidelines.component.html',
	styleUrls: ['./form-guidelines.component.scss']
})
export class FormGuidelinesPrinciplesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Guidelines formulaires'
	};
	constructor() { }

	ngOnInit() {
	}

}
