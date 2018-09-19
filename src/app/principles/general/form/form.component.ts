import { Component } from '@angular/core';
import { IPageInfos } from '../../../commons';

@Component({
	selector: 'ds-form',
	templateUrl: './form.component.html',
})
export class FormComponent {
	infos: IPageInfos = {
		title: 'Guidelines formulaires'
	};
	constructor() { }
}
