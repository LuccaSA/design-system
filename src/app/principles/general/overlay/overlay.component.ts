import { Component, OnInit } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';

@Component({
	selector: 'ds-overlay',
	templateUrl: './overlay.component.html',
})
export class OverlayComponent {
	infos: IFeatureInfos = {
		title: 'Modales, Side-panels'
	};
}
