import { Component, Input } from '@angular/core';
import { IPropertyDocumentation } from './interface.model';

@Component({
	selector: 'pri-property',
	templateUrl: './property.component.html',
})
export class PropertyDocumentationComponent {
	@Input() property: IPropertyDocumentation;
}
