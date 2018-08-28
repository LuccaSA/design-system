import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure/title-block';

@Component({
	selector: 'ds-containers',
	templateUrl: './containers.component.html',
	styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Containers',
		packages: ['SCSS'],
	};
	constructor() { }

	ngOnInit() {
	}

}
