import { Component, OnInit } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';

@Component({
	selector: 'ds-actions',
	templateUrl: './actions.component.html',
})
export class ActionsComponent {
	infos: IFeatureInfos = {
		title: 'Actions & Boutons'
	};
}
