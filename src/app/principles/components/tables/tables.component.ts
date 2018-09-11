import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';

@Component({
	selector: 'ds-tables',
	templateUrl: './tables.component.html',
	styleUrls: ['./tables.component.scss']
})
export class TablesPrinciplesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Tableaux',
	};
	constructor() { }

	ngOnInit() {
	}

}
