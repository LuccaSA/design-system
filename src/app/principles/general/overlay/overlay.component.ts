import { Component, OnInit } from '@angular/core';
import { IPageInfos } from '../../../commons';

@Component({
	selector: 'ds-overlay',
	templateUrl: './overlay.component.html',
})
export class OverlayComponent {
	infos: IPageInfos = {
		title: 'Modales, Side-panels'
	};
}
