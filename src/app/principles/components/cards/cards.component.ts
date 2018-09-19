import { Component } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';

@Component({
	selector: 'ds-cards',
	templateUrl: './cards.component.html',
})
export class CardsComponent {
	infos: IFeatureInfos = {
		title: 'Carte',
	};
}
