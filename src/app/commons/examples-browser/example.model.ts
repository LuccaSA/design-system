import { Type } from "@angular/core";

export interface IExample {
	component: Type<any>;
	code: string;
	tsCode?: string;
	description?: string;
}
