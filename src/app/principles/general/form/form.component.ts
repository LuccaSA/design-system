import { Component } from '@angular/core';
import { IFeatureInfos } from '@ds/commons';

@Component({
	selector: 'ds-form',
	templateUrl: './form.component.html',
})
export class FormComponent {
	infos: IFeatureInfos = {
		title: 'Guidelines formulaires'
	};
	constructor() { }
}
