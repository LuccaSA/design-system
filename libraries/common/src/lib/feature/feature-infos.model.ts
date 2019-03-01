import { IExample } from './example/index';
import { IThemeDocumentation, IDirectiveDocumentation, IComponentDocumentation, IPipeDocumentation } from '../documentation/index';

export type DSPackages = 'SCSS' | 'NG';

export interface IFeatureInfos {
	title: string;
	packages?: DSPackages[];
	keywords?: string[];
	examples?: IExample[];
	theme?: IThemeDocumentation;
	guidelines?: string;
	directive?: IDirectiveDocumentation;
	component?: IComponentDocumentation;
	pipe?: IPipeDocumentation;
}
