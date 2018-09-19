import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons';

@Component({
	selector: 'ds-actions',
	templateUrl: './actions.component.html',
})
export class ActionsComponent {
	infos: IPageInfos = {
		title: 'Actions & Boutons'
	};
}
