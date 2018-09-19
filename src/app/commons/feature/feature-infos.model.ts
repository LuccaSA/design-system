import { IExample } from "../structure";
import { IThemeProperty } from "../../models/theme.model";

export type DSPackages = 'SCSS' | 'NG';

export interface IFeatureInfos {
	title: string;
	packages?: DSPackages[];
	keywords?: string[];
	examples?: IExample[];
	theme?: IThemeProperty;
}
