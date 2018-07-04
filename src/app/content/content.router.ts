import { Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { VoiceComponent } from './voice/voice.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { PonctuationComponent } from './ponctuation/ponctuation.component';
import { FormatComponent } from './format/format.component';
import { TypographicRulesComponent } from './typogrpahic-rules/typogrpahic-rules.component';
import { Page } from '../commons/page/page.model';

const contentPage = new Page('content', ContentComponent, 'Content');
const voicePage = new Page('voice', VoiceComponent, 'Voix et ton', contentPage);
const vocabularyPage = new Page('vocabulary', VocabularyComponent, 'Vocabulaire', contentPage);
const ponctuationPage = new Page('ponctuation', PonctuationComponent, 'Ponctuation', contentPage);
const formatPage = new Page('format', FormatComponent, 'Formats', contentPage);
const typographicPage = new Page('typographic-rules', TypographicRulesComponent, 'Règles typographiques', contentPage);

export const contentPages: Page[] = [
  ponctuationPage,
  contentPage,
  voicePage,
  vocabularyPage,
  formatPage,
  typographicPage
];

export const contentRouter = Page.buildRoutes(contentPages);
