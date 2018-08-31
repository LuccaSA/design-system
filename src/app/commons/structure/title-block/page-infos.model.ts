import { IExample } from "../examples-browser";
import { IThemeProperty } from "../../../models/theme.model";

export type DSPackages = 'SCSS' | 'NG';

export interface IPageInfos {
	title: string;
	packages?: DSPackages[];
	examples?: IExample[];
	theme?: IThemeProperty;
}
