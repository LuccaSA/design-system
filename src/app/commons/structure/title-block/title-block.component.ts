import { Component, OnInit, Input } from '@angular/core';
import { IFeatureInfos } from '../../feature';

@Component({
	selector: 'ds-title-block',
	templateUrl: './title-block.component.html',
	styleUrls: ['./title-block.component.scss']
})
export class DsTitleBlockComponent implements OnInit {
	@Input() infos: IFeatureInfos;

	constructor() { }
	ngOnInit(): void { }

	public packagePalette(dspackage: string) {
		return `palette-${dspackage.toLowerCase()}`;
	}
}
