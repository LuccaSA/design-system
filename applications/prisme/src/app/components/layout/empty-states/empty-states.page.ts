import { FeaturePage } from '@prisme/common';
import { EmptyStatesFeature } from './empty-states.feature';

export const emptyStatesPage = new FeaturePage(
	'empty-states',
	'Empty states',
	EmptyStatesFeature,
);
