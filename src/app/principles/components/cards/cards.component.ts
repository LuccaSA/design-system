import { Component } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';

@Component({
	selector: 'ds-cards',
	templateUrl: './cards.component.html',
})
export class CardsComponent {
	infos: IPageInfos = {
		title: 'Carte',
	};
}
