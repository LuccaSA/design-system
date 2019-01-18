import { formatPage } from './format/format.page';
import { punctuationPage } from './punctuation';
import { typographicRulesPage } from './typographic-rules';
import { vocabularyPage } from './vocabulary';
import { voicePage } from './voice';
import { MainGroupPage } from '../main';

export const contentPage = new MainGroupPage('content', 'Contenu 🔨', [
	formatPage,
	punctuationPage,
	typographicRulesPage,
	vocabularyPage,
	voicePage,
]);
