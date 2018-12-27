import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import docs from '@ds-api/ng';
import { ClassDesc, MethodDesc, signature } from './ng-docs.model';

/**
 * Displays the API docs of a class, which is not a directive.
 *
 * For Config services, use NgbdApiDocsConfig instead.
 */
@Component({
	selector: 'ds-ng-docs-class',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './ng-docs-class.component.html',
	styles: [
		`
    .label-cell {
      width: 25%;
    }
    .content-cell {
      width: 75%;
    }
    `,
	],
})
export class DsNgDocsClassComponent {
	ngDocs: ClassDesc;

	constructor() {}

	@Input()
	set type(typeName: string) {
		this.ngDocs = docs[typeName];
	}

	methodSignature(method: MethodDesc): string {
		return signature(method);
	}
}
