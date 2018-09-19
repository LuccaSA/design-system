import { Component } from '@angular/core';
import { IPageInfos } from '../../../commons/structure';

@Component({
	selector: 'ds-navigation',
	templateUrl: './navigation.component.html'
})
export class NavigationComponent {
	infos: IPageInfos = {
		title: 'Menu principal',
	};
}
