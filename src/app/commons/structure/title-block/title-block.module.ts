import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsTitleBlockComponent } from './title-block.component';
import { DsExamplesBrowserModule } from '../examples-browser';

@NgModule({
	imports: [
		CommonModule,
		DsExamplesBrowserModule,
	],
	declarations: [
		DsTitleBlockComponent
	],
	exports: [
		DsTitleBlockComponent
	],
	providers: [],
})
export class DsTitleBlockModule {}
