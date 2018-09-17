import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { ColorsComponent } from './colors.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		ColorsComponent,
	],
	entryComponents: [
		ColorsComponent,
	]
})
export class DsColorsModule { }
