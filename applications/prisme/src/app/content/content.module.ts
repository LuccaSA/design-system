import { NgModule } from '@angular/core';

import { CommonModule } from '@prisme/common';
import { ContentRoutingModule } from './content.router';
import { MainModule } from '../main';
import { FormatModule } from './format';
import { PunctuationModule } from './punctuation';
import { TypographicRulesModule } from './typographic-rules';
import { VocabularyModule } from './vocabulary';
import { VoiceModule } from './voice';

@NgModule({
	imports: [
		CommonModule,
		ContentRoutingModule,
		MainModule,
		FormatModule,
		PunctuationModule,
		TypographicRulesModule,
		VocabularyModule,
		VoiceModule,
	],
})
export class ContentModule { }
