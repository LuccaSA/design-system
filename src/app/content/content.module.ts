import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatComponent } from './format/format.component';
import { PunctuationComponent } from './punctuation/punctuation.component';
import { TypographicRulesComponent } from './typographic-rules/typographic-rules.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VoiceComponent } from './voice/voice.component';
import { DsCommonsModule } from '@ds/commons';
import { DsContentRoutingModule } from './content.router';
import { DsMainModule } from '../main';

@NgModule({
	imports: [
		CommonModule,
		DsCommonsModule,
		DsContentRoutingModule,
		DsMainModule,
	],
	declarations: [
		FormatComponent,
		PunctuationComponent,
		TypographicRulesComponent,
		VocabularyComponent,
		VoiceComponent
	],
	entryComponents: [
		FormatComponent,
		PunctuationComponent,
		TypographicRulesComponent,
		VocabularyComponent,
		VoiceComponent
	]
})
export class DsContentModule { }
