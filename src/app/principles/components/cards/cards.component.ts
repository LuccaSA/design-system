import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';

@Component({
	selector: 'ds-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsPrinciplesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Carte',
	};

	constructor() {}

	ngOnInit() {}

}
