import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsCommonsModule } from '../../commons';
import { AnimationsComponent } from './animations.component';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	entryComponents: [
		AnimationsComponent,
	],
	declarations: [
		AnimationsComponent,
	]
})
export class AnimationsModule { }
