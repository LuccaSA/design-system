import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons';

@Component({
	selector: 'ds-overlay-principles',
	templateUrl: './overlay.component.html',
	styleUrls: ['./overlay.component.scss']
})
export class OverlayPrinciplesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Modales, Side-panels'
	};

	constructor() { }

	ngOnInit(): void { }
}
