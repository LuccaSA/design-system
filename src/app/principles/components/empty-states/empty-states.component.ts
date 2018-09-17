import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';
declare var require: any;
@Component({
	selector: 'ds-empty-states-principles',
	templateUrl: './empty-states.component.html',
	styleUrls: ['./empty-states.component.scss']
})
export class EmptyStatesPrinciplesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Empty State'
	};
	constructor() { }

	ngOnInit() {
	}

}
