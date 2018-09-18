import { GroupPage } from '@ds/commons';
import { modalsPage } from './modals/modals.page';
import { tooltipsPage } from './tooltips/tooltips.page';

export const overlaysPage = new GroupPage(
	'overlays',
	'Overlays',
	[
		modalsPage,
		tooltipsPage,
	]
);
