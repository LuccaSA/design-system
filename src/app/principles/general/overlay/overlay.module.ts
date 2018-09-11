import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { OverlayPrinciplesComponent } from './overlay.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		OverlayPrinciplesComponent,
	],
	entryComponents: [
		OverlayPrinciplesComponent,
	]
})
export class DsOverlayPrinciplesModule { }
