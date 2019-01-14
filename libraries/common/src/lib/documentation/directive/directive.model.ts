export interface IModuleDocumentation {
	fileName: string;
	className: string;
	declarations: string[];
	exports: string[];
}

export interface IClassDocumentation {
	fileName: string;
	className: string;
	description: string;
	properties: IPropertyDocumentation[];
	methods: IMethodDocumentation[];
}

export interface IDirectiveDocumentation extends IClassDocumentation {
	pipeName: string;
	selector: string;
	exportAs?: string;
	inputs: IInputDocumentation[];
	outputs: IOutputDocumentation[];
}

export interface IPropertyDocumentation {
	name: string;
	type: string;
	Documentationription: string;
	defaultValue?: string;
}

export interface IMethodDocumentation {
	name: string;
	Documentationription: string;
	args: IArgumentDocumentation[];
	returnType: string;
}

export interface IArgumentDocumentation {
	name: string;
	type: string;
}

export interface IInputDocumentation extends IPropertyDocumentation {}

export interface IOutputDocumentation extends IPropertyDocumentation {}

export function signature(method: IMethodDocumentation): string {
	const args = method.args.map(arg => `${arg.name}: ${arg.type}`).join(', ');
	return `${method.name}(${args})`;
}
