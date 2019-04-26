import { FeaturePage } from '@prisme/common';
import { NavigationFeature } from './navigation.feature';

export const navigationPage = new FeaturePage(
	'navigation',
	'Navigation',
	NavigationFeature,
	["menu", "vertical", "sidenav", "navigation"]
);
