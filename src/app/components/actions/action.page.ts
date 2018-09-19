import { GroupPage } from '../../commons';
import { buttonsPage } from './buttons/buttons.page';
import { actionIconsPage } from './action-icons/action-icons.page';
import { linksPage } from './links/links.page';

export const actionsPage = new GroupPage('actions', 'Actions', [
	buttonsPage,
	actionIconsPage,
	linksPage,
]);
