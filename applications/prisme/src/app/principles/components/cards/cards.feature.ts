import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';

@Component({
	selector: 'pri-cards',
	templateUrl: './cards.feature.html',
})
export class CardsFeature {
	infos: IFeatureInfos = {
		title: 'Carte',
		guidelines: 'guidelines/components/layout/cards/cards.guidelines.md',
	};
}
