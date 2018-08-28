import { Component, OnInit } from '@angular/core';
import { IThemeProperty } from '../../../models/theme.model';
import SCSS_DOCS from '@ds-api/scss';

@Component({
	selector: 'ds-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
	theme: IThemeProperty = SCSS_DOCS['card'];

	constructor() {
		console.log(SCSS_DOCS["card"]);
	}

	ngOnInit() {
	}

}
