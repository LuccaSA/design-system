import { IDocumentation } from '../documentation.model';

export interface IInterfaceDocumentation extends IDocumentation {
	properties: IPropertyDocumentation[];
	methods: IMethodDocumentation[];
}
export interface IMethodDocumentation extends IDocumentation {
	arguments: IArgumentDocumentation[];
	returnType: string;
}
export interface IPropertyDocumentation extends IDocumentation {
	propertyType: string;
	default?: string;
}
export interface IArgumentDocumentation extends IPropertyDocumentation {}