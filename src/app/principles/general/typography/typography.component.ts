import { Component } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';

@Component({
	selector: 'ds-typography',
	templateUrl: './typography.component.html',
})
export class TypographyComponent {
	infos: IPageInfos = {
		title: 'Typographie',
	};
}
