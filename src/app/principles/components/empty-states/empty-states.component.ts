import { Component } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';
@Component({
	selector: 'ds-empty-states',
	templateUrl: './empty-states.component.html',
})
export class EmptyStatesComponent {
	infos: IFeatureInfos = {
		title: 'Empty State'
	};
}
