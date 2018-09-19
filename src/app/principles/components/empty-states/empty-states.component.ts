import { Component } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';
@Component({
	selector: 'ds-empty-states',
	templateUrl: './empty-states.component.html',
})
export class EmptyStatesComponent {
	infos: IPageInfos = {
		title: 'Empty State'
	};
}
