import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SelectFeature } from './select.feature';
import { BasicExample } from './basic/basic.example';
import { LuSelectModule, LuOptionModule, LuInputDisplayerModule } from '@lucca-front/ng';
import { FormsModule } from '@angular/forms';
import { DisplayerExample } from './displayer/displayer.example';
import { ClearerExample } from './clearer/clearer.example';
import { MultipleExample } from './multiple/multiple.example';

@NgModule({
	imports: [
		CommonModule,
		LuSelectModule,
		LuOptionModule,
		LuInputDisplayerModule,
		FormsModule,
	],
	declarations: [
	SelectFeature,
	BasicExample,
	DisplayerExample,
	ClearerExample,
	MultipleExample],
	entryComponents: [
	BasicExample,
	DisplayerExample,
	ClearerExample,
	MultipleExample]
})
export class SelectModule {}
