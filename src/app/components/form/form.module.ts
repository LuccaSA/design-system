import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { FileComponent } from './file/file.component';
import { FormGuidelinesComponent } from './form-guidelines/form-guidelines.component';
import { FramedComponent } from './framed/framed.component';
import { RadiosComponent } from './radios/radios.component';
import { SelectComponent } from './select/select.component';
import { SwitchesComponent } from './switches/switches.component';
import { DsTextfieldsModule } from './textfields/textfields.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsTextfieldsModule
	],
	entryComponents: [
		CheckboxesComponent,
		FileComponent,
		FormGuidelinesComponent,
		FramedComponent,
		RadiosComponent,
		SelectComponent,
		SwitchesComponent
	],
	declarations: [
		CheckboxesComponent,
		FileComponent,
		FormGuidelinesComponent,
		FramedComponent,
		RadiosComponent,
		SelectComponent,
		SwitchesComponent
	]
})
export class FormModule { }
