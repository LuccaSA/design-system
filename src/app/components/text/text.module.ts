import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { BasicTextComponent } from './basic-text/basic-text.component';
import { LabelsComponent } from './labels/labels.component';
import { TextGuidelinesComponent } from './text-guidelines/text-guidelines.component';
import { TitlesComponent } from './titles/titles.component';

@NgModule({
	imports: [
		DsCommonsModule
	],
	entryComponents: [
		BasicTextComponent,
		LabelsComponent,
		TextGuidelinesComponent,
		TitlesComponent,
	],
	declarations: [
		BasicTextComponent,
		LabelsComponent,
		TextGuidelinesComponent,
		TitlesComponent,
	]
})
export class TextModule { }
