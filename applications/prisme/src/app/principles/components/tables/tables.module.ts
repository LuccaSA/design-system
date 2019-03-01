import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TablesFeature } from './tables.feature';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		TablesFeature
	],
	entryComponents: [
		TablesFeature
	]
})
export class TablesModule { }
