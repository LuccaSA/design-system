import { NgModule } from '@angular/core';
import { BoxesComponent } from './boxes/boxes.component';
import { CalloutsComponent } from './callouts/callouts.component';
import { ToastsComponent } from './toasts/toasts.component';
import { DsCommonsModule } from '../../commons';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	entryComponents: [
		BoxesComponent,
		CalloutsComponent,
		ToastsComponent
	],
	declarations: [
		BoxesComponent,
		CalloutsComponent,
		ToastsComponent
	]
})
export class FeedbackModule { }
