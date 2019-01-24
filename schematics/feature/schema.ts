import { IOptions } from '../schema';

export interface IFeatureOptions extends IOptions {
	title: string;
	directive?: string;
	component?: string;
	pipe?: string;
	scss?: string;
	prefix?: string;
	guidelines?: string;
}
