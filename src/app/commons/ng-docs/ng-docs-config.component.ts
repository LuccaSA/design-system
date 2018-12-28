import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import docs from '@ds-api/ng';
import { ClassDesc } from './ng-docs.model';

const CONFIG_SUFFIX_LENGTH = 'Config'.length;

/**
 * Displays the API docs of a Config service. A Config service for a component Foo is named, by convention,
 * FooConfig, and only has properties, whose name matches with an input of the directive.
 * In order to avoid cluttering the demo pages, the only things displayed by this component
 * is the description of the Config service and the list of its properties, whose documentation and
 * default value is documented in the directive itself.
 */
@Component({
	selector: 'ds-ng-docs-config',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './ng-docs-config.component.html',
})
export class DsNgDocsConfigComponent {
	ngDocs: ClassDesc;
	directiveName: string;

	constructor() {}

	@Input()
	set type(typeName: string) {
		this.ngDocs = docs[typeName];
		this.directiveName = typeName.slice(0, -CONFIG_SUFFIX_LENGTH);
	}
}
