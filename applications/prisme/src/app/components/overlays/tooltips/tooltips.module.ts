import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TooltipsFeature } from './tooltips.feature';
import { LuTooltipModule } from '@lucca-front/ng';
import { BasicExample } from './basic/basic.example';
import { DisabledExample } from './disabled/disabled.example';

@NgModule({
	imports: [
		CommonModule,
		LuTooltipModule,
	],
	declarations: [
	TooltipsFeature,
	BasicExample,
	DisabledExample],
	entryComponents: [
	BasicExample,
	DisabledExample]
})
export class TooltipsModule {}
