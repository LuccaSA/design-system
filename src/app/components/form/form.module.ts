import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { FileComponent } from './file/file.component';
import { FormGuidelinesComponent } from './form-guidelines/form-guidelines.component';
import { FramedComponent } from './framed/framed.component';
import { RadiosComponent } from './radios/radios.component';
import { SelectComponent } from './select/select.component';
import { SwitchesComponent } from './switches/switches.component';
import { TextfieldsComponent } from './textfields/textfields.component';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	entryComponents: [
		CheckboxesComponent,
		FileComponent,
		FormGuidelinesComponent,
		FramedComponent,
		RadiosComponent,
		SelectComponent,
		SwitchesComponent,
		TextfieldsComponent
	],
	declarations: [
		CheckboxesComponent,
		FileComponent,
		FormGuidelinesComponent,
		FramedComponent,
		RadiosComponent,
		SelectComponent,
		SwitchesComponent,
		TextfieldsComponent
	]
})
export class FormModule { }
