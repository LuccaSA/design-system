import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons';

@Component({
	selector: 'ds-actions-principles',
	templateUrl: './actions-principles.component.html',
	styleUrls: ['./actions-principles.component.scss']
})
export class ActionsPrinciplesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Actions & Boutons'
	};
	constructor() { }

	ngOnInit() {
	}

}
