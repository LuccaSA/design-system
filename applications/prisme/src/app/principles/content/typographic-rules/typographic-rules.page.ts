import { FeaturePage } from '@prisme/common';
import { TypographicRulesFeature } from './typographic-rules.feature';

export const typographicRulesPage = new FeaturePage(
	'typographic-rules',
	'Règles typographiques 🔨',
	TypographicRulesFeature,
	["typographie", "typographic", "rules", "règles"]
);
