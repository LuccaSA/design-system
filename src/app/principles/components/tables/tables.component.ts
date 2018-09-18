import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';

@Component({
	selector: 'ds-tables',
	templateUrl: './tables.component.html',
})
export class TablesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Tableaux',
	};
	constructor() { }

	ngOnInit() {
	}

}
