import { IAsset } from '../asset';

export interface ITool extends IAsset {
	title: string;
	link: string;
	description: string;
}
