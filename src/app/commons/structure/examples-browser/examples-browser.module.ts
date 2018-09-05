import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LuSelectModule, LuOptionModule, LuInputDisplayerModule } from '@lucca-front/ng';
import { ExamplesBrowserComponent } from './examples-browser.component';
import { DsCodeTabsModule } from '../../code-tabs/code-tabs.module';
import { DsSafeContentModule } from '../../safe-content';
import { DsExampleService } from './example.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DsCodeTabsModule,
		DsSafeContentModule,
		LuSelectModule,
		LuInputDisplayerModule,
		LuOptionModule
	],
	declarations: [
		ExamplesBrowserComponent
	],
	exports: [
		ExamplesBrowserComponent
	],
	providers: [
		DsExampleService
	]
})
export class DsExamplesBrowserModule {}
