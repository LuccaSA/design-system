import { GroupPage } from '../../commons';
import { buttonsPage } from './buttons/buttons.page';
import { actionIconsPage } from './action-icons/action-icons.page';

export const actionsPage = new GroupPage('actions', 'Actions', [
	buttonsPage,
	actionIconsPage,
]);
