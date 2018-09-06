import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { FormGuidelinesComponent } from './form-guidelines.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		FormGuidelinesComponent,
	],
	entryComponents: [
		FormGuidelinesComponent,
	]
})
export class DsFormGuidelinesModule { }
