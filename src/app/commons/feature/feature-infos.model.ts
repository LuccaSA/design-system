import { IExample } from '../structure';
import { IThemeProperty, IDocProperty } from '../../models';

export type DSPackages = 'SCSS' | 'NG';

export interface IFeatureInfos {
	title: string;
	packages?: DSPackages[];
	keywords?: string[];
	examples?: IExample[];
	theme?: IThemeProperty;
	doc?: IDocProperty;
}
