import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons';

@Component({
	selector: 'ds-general-guidelines',
	templateUrl: './general-guidelines.component.html',
	styleUrls: ['./general-guidelines.component.scss']
})
export class GeneralGuidelinesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Guidelines des actions'
	};
	constructor() { }

	ngOnInit() {
	}

}
