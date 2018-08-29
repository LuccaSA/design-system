import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsExamplesBrowserModule } from './examples-browser';
import { DsThemeDisplayerModule } from './theme-displayer';
import { DsTitleBlockModule } from './title-block';

@NgModule({
	imports: [
		CommonModule,
		DsExamplesBrowserModule,
		DsThemeDisplayerModule,
		DsTitleBlockModule
	],
	declarations: [
	],
	exports: [
		DsExamplesBrowserModule,
		DsThemeDisplayerModule,
		DsTitleBlockModule
	],
	providers: [],
})
export class DsStructureModule {}
