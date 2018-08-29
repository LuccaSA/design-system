import { IExample } from "../examples-browser";

export type DSPackages = 'SCSS' | 'NG';

export interface IPageInfos {
	title: string;
	packages?: DSPackages[];
	examples?: IExample[];
}
