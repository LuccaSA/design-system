import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatComponent } from './format/format.component';
import { PonctuationComponent } from './ponctuation/ponctuation.component';
import { TypographicRulesComponent } from './typogrpahic-rules/typogrpahic-rules.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VoiceComponent } from './voice/voice.component';
import { CommonsModule } from '../commons/commons.module';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		CommonsModule,
		RouterModule
	],
	declarations: [
		FormatComponent,
		PonctuationComponent,
		TypographicRulesComponent,
		VocabularyComponent,
		VoiceComponent
	],
	entryComponents: [
		FormatComponent,
		PonctuationComponent,
		TypographicRulesComponent,
		VocabularyComponent,
		VoiceComponent
	]
})
export class ContentModule { }
