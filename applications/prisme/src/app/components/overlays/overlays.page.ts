import { GroupPage } from '@prisme/common';
import { modalsPage } from './modals/modals.page';
import { tooltipsPage } from './tooltips/tooltips.page';

export const overlaysPage = new GroupPage(
	'overlays',
	'Overlays 🔨',
	[
	tooltipsPage,
		modalsPage,
	]
);
