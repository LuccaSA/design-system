import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { DsBoxesModule } from './boxes/boxes.module';
import { DsCalloutsModule } from './callouts/callouts.module';
import { DsToastsModule } from './toasts/toasts.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsBoxesModule,
		DsCalloutsModule,
		DsToastsModule
	],
})
export class FeedbackModule { }
