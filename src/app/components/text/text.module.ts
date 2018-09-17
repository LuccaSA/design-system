import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { BasicTextComponent } from './basic-text/basic-text.component';
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
		BasicTextComponent
	],
	declarations: [
		BasicTextComponent
	]
})
export class TextModule { }
