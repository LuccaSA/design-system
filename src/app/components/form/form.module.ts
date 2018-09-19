import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { SelectComponent } from './select/select.component';
import { DsTextfieldsModule } from './textfields/textfields.module';
import { DsRadiosModule } from './radios/radios.module';
import { DsCheckboxesModule } from './checkboxes/checkboxes.module';
import { DsSwitchesModule } from './switches/switches.module';
import { DsFramedModule } from './framed/framed.module';
import { DsFileModule } from './file/file.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsTextfieldsModule,
		DsRadiosModule,
		DsCheckboxesModule,
		DsSwitchesModule,
		DsFramedModule,
		DsFileModule
	],
	entryComponents: [
		SelectComponent,
	],
	declarations: [
		SelectComponent,
	]
})
export class FormModule { }
