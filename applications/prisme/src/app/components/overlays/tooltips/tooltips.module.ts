import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TooltipsFeature } from './tooltips.feature';
import { LuTooltipModule } from '@lucca-front/ng';

@NgModule({
	imports: [
		CommonModule,
		LuTooltipModule,
	],
	declarations: [
	TooltipsFeature],
	entryComponents: [
	]
})
export class TooltipsModule {}
