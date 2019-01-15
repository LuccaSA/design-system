import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';

@Component({
	selector: 'pri-navigation',
	templateUrl: './navigation.feature.html'
})
export class NavigationFeature {
	infos: IFeatureInfos = {
		title: 'Menu principal',
		guidelines: 'guidelines/components/navigation/nav-side/nav-side.guidelines.md',
	};
}
