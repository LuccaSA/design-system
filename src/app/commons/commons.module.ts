import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';
import { ToolComponent } from './tool/tool.component';
import { DsCodeTabsComponent } from './code-tabs/code-tabs.component';
import { TabComponent } from './code-tabs/tab/tab.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HighlightModule.forRoot({theme: 'vs2015'}),
	],
	declarations: [
		ToolComponent,
		DsCodeTabsComponent,
		TabComponent,
	],
	exports: [
		ToolComponent,
		DsCodeTabsComponent,
		TabComponent
	],
	entryComponents: [
		ToolComponent,
		DsCodeTabsComponent,
		TabComponent
	]
})
export class CommonsModule { }
