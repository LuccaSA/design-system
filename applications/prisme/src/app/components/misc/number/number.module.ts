import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { NumberFeature } from './number.feature';
import { LuNumberModule } from '@lucca-front/ng';
import { BasicExample } from './basic/basic.example';

@NgModule({
	imports: [
		CommonModule,
		LuNumberModule,
	],
	declarations: [
	NumberFeature,
	BasicExample],
	entryComponents: [
	BasicExample]
})
export class NumberModule {}
