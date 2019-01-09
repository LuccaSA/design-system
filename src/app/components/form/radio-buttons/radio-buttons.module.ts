import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { RadioButtonsFeature } from './radio-buttons.feature';
import { BasicExample } from './basic/basic.example';

@NgModule({
	imports: [
		DsCommonsModule
	],
	declarations: [
	RadioButtonsFeature,
	BasicExample],
	entryComponents: [
	BasicExample]
})
export class DsRadioButtonsModule {}
