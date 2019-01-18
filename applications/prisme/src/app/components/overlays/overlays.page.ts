import { GroupPage } from '@prisme/common';
import { modalsPage } from './modals/modals.page';

export const overlaysPage = new GroupPage(
	'overlays',
	'Overlays 🔨',
	[
		modalsPage,
	]
);
