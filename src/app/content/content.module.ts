import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatComponent } from './format/format.component';
import { PonctuationComponent } from './ponctuation/ponctuation.component';
import { TypogrpahicRulesComponent } from './typogrpahic-rules/typogrpahic-rules.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VoiceComponent } from './voice/voice.component';
import { ContentComponent } from './content.component';
import { CommonsModule } from '../commons/commons.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    RouterModule
  ],
  declarations: [
    ContentComponent,
    FormatComponent,
    PonctuationComponent,
    TypogrpahicRulesComponent,
    VocabularyComponent,
    VoiceComponent
  ]
})
export class ContentModule { }
