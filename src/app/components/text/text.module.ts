import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { BasicTextComponent } from './basic-text/basic-text.component';
import { TextGuidelinesComponent } from './text-guidelines/text-guidelines.component';
import { DsTitlesModule } from './titles/titles.module';
import { DsLabelsModule } from './labels/labels.module';
import { DsIconsModule } from './icons/icons.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsTitlesModule,
		DsLabelsModule,
		DsIconsModule
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
