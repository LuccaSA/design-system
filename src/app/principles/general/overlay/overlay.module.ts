import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { OverlayComponent } from './overlay.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		OverlayComponent,
	],
	entryComponents: [
		OverlayComponent,
	]
})
export class DsOverlayModule { }
