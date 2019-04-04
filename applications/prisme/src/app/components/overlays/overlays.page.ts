import { GroupPage } from '@prisme/common';
import { modalsPage } from './modals/modals.page';
import { tooltipsPage } from './tooltips/tooltips.page';
import { popoversPage } from './popovers/popovers.page';

export const overlaysPage = new GroupPage(
	'overlays',
	'Overlays 🔨',
	[
	popoversPage,
	tooltipsPage,
		modalsPage,
	]
);
