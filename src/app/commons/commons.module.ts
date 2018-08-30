import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolComponent } from './tool/tool.component';
import { DsPageItemModule } from './page';
import { DsCodeTabsModule } from './code-tabs';
import { DsDocApiModule } from './services/doc-api.module';
import { DsStructureModule } from './structure';

@NgModule({
	imports: [
		CommonModule,
		DsPageItemModule,
		DsCodeTabsModule,
		DsStructureModule,
		DsDocApiModule
	],
	declarations: [
		ToolComponent
	],
	exports: [
		ToolComponent,
		DsPageItemModule,
		DsCodeTabsModule,
		DsStructureModule
	],
	entryComponents: [
		ToolComponent,
	]
})
export class DsCommonsModule { }
