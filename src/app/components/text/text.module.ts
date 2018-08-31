import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { BasicTextComponent } from './basic-text/basic-text.component';
import { TextGuidelinesComponent } from './text-guidelines/text-guidelines.component';
import { DsTitlesModule } from './titles/titles.module';
import { DsLabelsModule } from './labels/labels.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsTitlesModule,
		DsLabelsModule
	],
	entryComponents: [
		BasicTextComponent,
		TextGuidelinesComponent,
	],
	declarations: [
		BasicTextComponent,
		TextGuidelinesComponent,
	]
})
export class TextModule { }
