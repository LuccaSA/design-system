import { Component, Input } from '@angular/core';
import { IFeatureInfos } from './feature-infos.model';

@Component({
	selector: 'pri-feature',
	templateUrl: './feature.component.html',
	styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
	@Input() infos: IFeatureInfos;

	public packagePalette(dspackage: string) {
		return `palette-${dspackage.toLowerCase()}`;
	}
}
