import { IOptions } from '../schema';

export interface IFeatureOptions extends IOptions {
	title: string;
	ng?: string;
	scss?: string;
	prefix?: string;
	guidelines?: string;
}
