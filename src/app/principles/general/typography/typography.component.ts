import { Component } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';

@Component({
	selector: 'ds-typography',
	templateUrl: './typography.component.html',
})
export class TypographyComponent {
	infos: IFeatureInfos = {
		title: 'Typographie',
	};
}
