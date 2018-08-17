import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolComponent } from './tool/tool.component';
import { DsPageItemModule } from './page/option/page-item.module';
import { DsExamplesBrowserModule } from './examples-browser/examples-browser.module';
import { DsCodeTabsModule } from './code-tabs/code-tabs.module';

@NgModule({
	imports: [
		CommonModule,
		DsPageItemModule,
		DsCodeTabsModule,
		DsExamplesBrowserModule
	],
	declarations: [
		ToolComponent
	],
	exports: [
		ToolComponent,
		DsPageItemModule,
		DsCodeTabsModule,
		DsExamplesBrowserModule
	],
	entryComponents: [
		ToolComponent,
	]
})
export class DsCommonsModule { }
