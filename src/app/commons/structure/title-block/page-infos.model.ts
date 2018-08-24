import { IExample } from "../examples-browser";

export type DSPackages = 'SCSS' | 'ng';

export interface IPageInfos {
	title: string;
	packages?: DSPackages[];
	examples?: IExample[];
}
