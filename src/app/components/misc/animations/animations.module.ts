import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { AnimationsComponent } from './animations.component';
import { EnterExampleComponent } from './enter/enter.example';
import { ExitExampleComponent } from './exit/exit.example';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	entryComponents: [
		AnimationsComponent,
		EnterExampleComponent,
		ExitExampleComponent,
	],
	declarations: [
		AnimationsComponent,
		EnterExampleComponent,
		ExitExampleComponent,
	]
})
export class DsAnimationsModule { }
