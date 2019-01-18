import { IExample } from './example/index';
import { IThemeDocumentation, IDirectiveDocumentation } from '../documentation/index';

export type DSPackages = 'SCSS' | 'NG';

export interface IFeatureInfos {
	title: string;
	packages?: DSPackages[];
	keywords?: string[];
	examples?: IExample[];
	theme?: IThemeDocumentation;
	directive?: IDirectiveDocumentation;
	guidelines?: string;
}
