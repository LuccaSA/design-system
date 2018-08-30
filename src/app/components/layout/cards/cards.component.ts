import { Component, OnInit } from '@angular/core';
import { DsDocApiService } from '../../../commons/doc-api';

@Component({
	selector: 'ds-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
	theme = this.docApi.theme('card');

	constructor(private docApi: DsDocApiService) {}

	ngOnInit() {
	}

}
