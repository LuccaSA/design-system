import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { GeneralGuidelinesComponent } from './general-guidelines.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		GeneralGuidelinesComponent,
	],
	entryComponents: [
		GeneralGuidelinesComponent,
	]
})
export class DsGeneralGuidelinesModule { }
