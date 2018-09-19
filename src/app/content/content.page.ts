import { RootGroupPage } from '@ds/commons';
import { formatPage } from './format/format.page';
import { punctuationPage } from './punctuation/punctuation.page';
import { typographicRulesPage } from './typographic-rules/typographic-rules.page';
import { vocabularyPage } from './vocabulary/vocabulary.page';
import { voicePage } from './voice/voice.page';

export const contentPage = new RootGroupPage('content', 'Content', [
	formatPage,
	punctuationPage,
	typographicRulesPage,
	vocabularyPage,
	voicePage,
]);
