import { IAsset } from "@ds/commons";

export interface IRessourceAsset extends IAsset {
	name: string;
	type: string;
	usage?: string;
}
