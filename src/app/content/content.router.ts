import { Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { VoiceComponent } from './voice/voice.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { PonctuationComponent } from './ponctuation/ponctuation.component';
import { FormatComponent } from './format/format.component';
import { TypographicRulesComponent } from './typogrpahic-rules/typogrpahic-rules.component';
import { Page, Pages } from '../commons/page/page.model';

const voicePage = new Page('voice', VoiceComponent, 'Voix et ton');
const vocabularyPage = new Page('vocabulary', VocabularyComponent, 'Vocabulaire');
const ponctuationPage = new Page('ponctuation', PonctuationComponent, 'Ponctuation');
const formatPage = new Page('format', FormatComponent, 'Formats');
const typographicPage = new Page('typographic-rules', TypographicRulesComponent, 'Règles typographiques');

export const contentPages: Pages = new Pages('content', [
  voicePage,
  ponctuationPage,
  vocabularyPage,
  formatPage,
  typographicPage
], voicePage);

// export const contentRouter = [];
