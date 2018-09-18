import { RootGroupPage } from '../commons';
import { generalPage } from './general/general.page';
import { componentsPage } from './components/components.page';

export const principlesPage = new RootGroupPage('principles', 'Principles', [
	generalPage,
	componentsPage,
]);
