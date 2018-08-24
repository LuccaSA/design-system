import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { DsCodeTabsComponent } from './code-tabs.component';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		TabComponent,
		DsCodeTabsComponent
	],
	exports: [
		DsCodeTabsComponent
	],
	entryComponents: [
		DsCodeTabsComponent
	]
})
export class DsCodeTabsModule {}
