import { formatPage } from './format/format.page';
import { punctuationPage } from './punctuation/punctuation.page';
import { typographicRulesPage } from './typographic-rules/typographic-rules.page';
import { vocabularyPage } from './vocabulary/vocabulary.page';
import { voicePage } from './voice/voice.page';
import { MainGroupPage } from 'app/main';

export const contentPage = new MainGroupPage('content', 'Content', [
	formatPage,
	punctuationPage,
	typographicRulesPage,
	vocabularyPage,
	voicePage,
]);
