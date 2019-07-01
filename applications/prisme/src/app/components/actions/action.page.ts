import { GroupPage } from '@prisme/common';
import { buttonsPage } from './buttons/buttons.page';
import { actionIconsPage } from './action-icons/action-icons.page';
import { linksPage } from './links/links.page';
import { guidelinesPage } from './guidelines/guidelines.page';

export const actionsPage = new GroupPage('actions', 'Actions', [
	guidelinesPage,
	buttonsPage,
	actionIconsPage,
	linksPage,
]);
