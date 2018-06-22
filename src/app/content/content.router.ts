import { Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { VoiceComponent } from './voice/voice.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { PonctuationComponent } from './ponctuation/ponctuation.component';
import { FormatComponent } from './format/format.component';
import { TypogrpahicRulesComponent } from './typogrpahic-rules/typogrpahic-rules.component';

export const contentRouter = [
  { path: 'content', component: ContentComponent,
    children: [
      { path: '', redirectTo: 'voice', pathMatch: 'full' },
      { path: 'voice', component: VoiceComponent },
      { path: 'vocabulary', component: VocabularyComponent },
      { path: 'ponctuation', component: PonctuationComponent },
      { path: 'format', component: FormatComponent },
      { path: 'typographic-rules', component: TypogrpahicRulesComponent }
    ]
  },
] as Routes;
