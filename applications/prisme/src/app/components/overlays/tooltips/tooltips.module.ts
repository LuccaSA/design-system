import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TooltipsFeature } from './tooltips.feature';
import { LuTooltipModule } from '@lucca-front/ng';
import { BasicExample } from './basic/basic.example';

@NgModule({
	imports: [
		CommonModule,
		LuTooltipModule,
	],
	declarations: [
	TooltipsFeature,
	BasicExample],
	entryComponents: [
	BasicExample]
})
export class TooltipsModule {}
