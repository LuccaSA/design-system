import { IClassDocumentation } from '../class/index';
import { IPropertyDocumentation, IMethodDocumentation } from '../interface/index';

export interface IDirectiveDocumentation extends IClassDocumentation {
	selector: string;
	exportAs: string;
	inputs: IInputDocumentation[];
	outputs: IOutputDocumentation[];
}
export interface IInputDocumentation extends IPropertyDocumentation {}
export interface IOutputDocumentation extends IMethodDocumentation {}
