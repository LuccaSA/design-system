import { RootGroupPage } from '../commons';
import { generalPage } from './general/general.page';

export const principlesPage = new RootGroupPage('principles', 'Principles', [
	generalPage,
]);
