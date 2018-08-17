import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';
import { ToolComponent } from './tool/tool.component';
import { DsCodeTabsComponent } from './code-tabs/code-tabs.component';
import { TabComponent } from './code-tabs/tab/tab.component';
import { DsPageItemModule } from './page/option/page-item.module';

@NgModule({
	imports: [
		CommonModule,
		HighlightModule,
		DsPageItemModule,
	],
	declarations: [
		ToolComponent,
		DsCodeTabsComponent,
		TabComponent,
	],
	exports: [
		ToolComponent,
		DsCodeTabsComponent,
		TabComponent,
		DsPageItemModule,
	],
	entryComponents: [
		ToolComponent,
		DsCodeTabsComponent,
		TabComponent
	]
})
export class DsCommonsModule { }
