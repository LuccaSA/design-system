import { Component } from '@angular/core';
import { IFeatureInfos } from '@prisme/common';

@Component({
	selector: 'pri-tables',
	templateUrl: './tables.feature.html',
})
export class TablesFeature {
	infos: IFeatureInfos = {
		title: 'Tableaux',
		guidelines: 'guidelines/components/listings/tables/tables.guidelines.md',
	};
}
