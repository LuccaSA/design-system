import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';

@Component({
	selector: 'ds-navigation',
	templateUrl: './navigation.component.html'
})
export class NavigationPrinciplesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Menu principal',
	};

	constructor() { }

	ngOnInit(): void { }
}
