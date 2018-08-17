import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LuSelectModule, LuOptionModule } from '@lucca-front/ng';
import { ExamplesBrowserComponent } from './examples-browser.component';
import { DsCodeTabsModule } from '../code-tabs/code-tabs.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DsCodeTabsModule,
		LuSelectModule,
		LuOptionModule
	],
	declarations: [
		ExamplesBrowserComponent
	],
	exports: [
		ExamplesBrowserComponent
	],
})
export class DsExamplesBrowserModule {}
