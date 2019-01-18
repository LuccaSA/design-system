import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { AnimationsFeature } from './animations.feature';
import { EnterExampleComponent } from './enter/enter.example';
import { ExitExampleComponent } from './exit/exit.example';

@NgModule({
	imports: [
		CommonModule,
	],
	entryComponents: [
		EnterExampleComponent,
		ExitExampleComponent,
	],
	declarations: [
		EnterExampleComponent,
		ExitExampleComponent,
		AnimationsFeature,
	]
})
export class AnimationsModule { }
