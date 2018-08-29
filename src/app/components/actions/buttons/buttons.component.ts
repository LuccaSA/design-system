import { Component, OnInit } from '@angular/core';
import { DsDocApiService } from '../../../commons/services';

@Component({
	selector: 'ds-buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
	theme = this.docApi.theme('button');

	constructor(private docApi: DsDocApiService) {}

	ngOnInit() {
	}

}
