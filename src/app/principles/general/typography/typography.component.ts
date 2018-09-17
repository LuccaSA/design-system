import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';

@Component({
	selector: 'ds-typography-principles',
	templateUrl: './typography.component.html',
	styleUrls: ['./typography.component.scss']
})
export class TypographyPrinciplesComponent implements OnInit {
	infos: IPageInfos = {
		title: 'Typographie',
	};
	constructor() { }

	ngOnInit() {
	}

}
