import { Component, Input } from '@angular/core';
import { IMethodDocumentation } from './interface.model';

@Component({
	selector: 'pri-method',
	templateUrl: './method.component.html',
})
export class MethodDocumentationComponent {
	@Input() method: IMethodDocumentation;
	get signature(): string {
		const args = this.method.arguments.map(arg => `${arg.name}: ${arg.type}`).join(', ');
		return `${this.method.name}(${args})`;
	}
}
