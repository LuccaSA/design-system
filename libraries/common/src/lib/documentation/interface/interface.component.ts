import { Component, Input } from '@angular/core';
import { IInterfaceDocumentation, IMethodDocumentation } from './interface.model';

@Component({
	selector: 'pri-interface',
	templateUrl: './interface.component.html',
})
export class InterfaceDocumentationComponent {
	@Input() interface: IInterfaceDocumentation;
	signature(method: IMethodDocumentation): string {
		const args = method.arguments.map(arg => `${arg.name}: ${arg.type}`).join(', ');
		return `${method.name}(${args})`;
	}
}
