import { IInterfaceDocumentation } from '../interface/index';

export interface IClassDocumentation extends IInterfaceDocumentation {
	abstract: boolean;
}
