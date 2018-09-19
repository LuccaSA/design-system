import { Component } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';

@Component({
	selector: 'ds-navigation',
	templateUrl: './navigation.component.html'
})
export class NavigationComponent {
	infos: IFeatureInfos = {
		title: 'Menu principal',
	};
}
