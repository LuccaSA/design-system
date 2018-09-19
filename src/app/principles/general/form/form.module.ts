import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { FormComponent } from './form.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		FormComponent,
	],
	entryComponents: [
		FormComponent,
	]
})
export class DsFormModule { }
