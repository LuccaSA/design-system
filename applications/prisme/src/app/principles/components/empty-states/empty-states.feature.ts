import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';
@Component({
	selector: 'pri-empty-states',
	templateUrl: './empty-states.feature.html',
})
export class EmptyStatesFeature {
	infos: IFeatureInfos = {
		title: 'Empty State',
		guidelines: 'guidelines/components/layout/empty-states/empty-states.guidelines.md',
	};
}
