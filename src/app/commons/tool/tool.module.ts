import { NgModule } from '@angular/core';

import { ToolComponent } from './tool.component';
import { DsAssetModule } from '../asset';

@NgModule({
	imports: [
		DsAssetModule
	],
	declarations: [
		ToolComponent
	],
	exports: [
		ToolComponent,
	],
	entryComponents: [
		ToolComponent,
	]
})
export class DsToolModule { }
