import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { AnimationsModule } from './animations/animations.module';
import { FunctionsModule } from './functions';
import { MixinsModule } from './mixins';
import { UtilitiesModule } from './utilities';

@NgModule({
	imports: [
		CommonModule,
		AnimationsModule,
		FunctionsModule,
		MixinsModule,
		UtilitiesModule,
	],
})
export class MiscModule { }
