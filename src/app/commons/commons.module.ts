import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolComponent } from './tool/tool.component';
import { DsPageItemModule } from './page';
import { DsExamplesBrowserModule } from './examples-browser';
import { DsCodeTabsModule } from './code-tabs';
import { DsThemeDisplayerModule } from './theme-displayer';

@NgModule({
	imports: [
		CommonModule,
		DsPageItemModule,
		DsCodeTabsModule,
		DsExamplesBrowserModule,
		DsThemeDisplayerModule,
	],
	declarations: [
		ToolComponent
	],
	exports: [
		ToolComponent,
		DsPageItemModule,
		DsCodeTabsModule,
		DsExamplesBrowserModule,
		DsThemeDisplayerModule,
	],
	entryComponents: [
		ToolComponent,
	]
})
export class DsCommonsModule { }
