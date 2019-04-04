import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { NumberFeature } from './number.feature';
import { LuNumberModule } from '@lucca-front/ng';
import { BasicExample } from './basic/basic.example';
import { PrecisionExample } from './precision/precision.example';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		LuNumberModule,
		FormsModule,
	],
	declarations: [
	NumberFeature,
	BasicExample,
	PrecisionExample],
	entryComponents: [
	BasicExample,
	PrecisionExample]
})
export class NumberModule {}
