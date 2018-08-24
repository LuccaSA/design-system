import { Component, OnInit, Input } from '@angular/core';
import { IPageInfos } from './page-infos.model';

@Component({
	selector: 'ds-title-block',
	templateUrl: './title-block.component.html',
	styleUrls: ['./title-block.component.scss']
})
export class DsTitleBlockComponent implements OnInit {
	@Input() infos: IPageInfos;

	constructor() { }

	ngOnInit(): void { }
}
