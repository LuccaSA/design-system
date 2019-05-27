import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SelectFeature } from './select.feature';
import { BasicExample } from './basic/basic.example';
import { LuSelectModule, LuOptionModule, LuInputDisplayerModule } from '@lucca-front/ng';
import { FormsModule } from '@angular/forms';
import { DisplayerExample } from './displayer/displayer.example';

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
	DisplayerExample],
	entryComponents: [
	BasicExample,
	DisplayerExample]
})
export class SelectModule {}
