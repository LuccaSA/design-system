import { Component, OnInit } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';

@Component({
	selector: 'ds-tables',
	templateUrl: './tables.component.html',
})
export class TablesComponent implements OnInit {
	infos: IFeatureInfos = {
		title: 'Tableaux',
	};
	constructor() { }

	ngOnInit() {
	}

}
