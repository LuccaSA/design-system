import { NgModule } from '@angular/core';
import { ToastsComponent } from './toasts/toasts.component';
import { DsCommonsModule } from '../../commons';
import { DsBoxesModule } from './boxes/boxes.module';
import { DsCalloutsModule } from './callouts/callouts.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsBoxesModule,
		DsCalloutsModule
	],
	entryComponents: [
		ToastsComponent
	],
	declarations: [
		ToastsComponent
	]
})
export class FeedbackModule { }
