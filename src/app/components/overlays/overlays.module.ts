import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { ModalsComponent, DialogTestComponent } from './modals/modals.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { DsCommonsModule } from '@ds/commons';

@NgModule({
	imports: [
		DsCommonsModule,
		MatDialogModule
	],
	entryComponents: [
		DialogTestComponent,
		ModalsComponent,
		TooltipsComponent,
	],
	declarations: [
		ModalsComponent,
		TooltipsComponent,
		DialogTestComponent
	]
})
export class OverlaysModule { }
