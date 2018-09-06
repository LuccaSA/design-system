import { RootGroupPage } from '../commons';
import { actionsPage } from './actions/action.page';

export const componentsPage = new RootGroupPage('components', 'Components', [
	actionsPage,
]);
