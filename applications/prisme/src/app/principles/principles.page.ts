import { generalPage } from './general/general.page';
import { componentsPage } from './components/components.page';
import { MainGroupPage } from '../main';

export const principlesPage = new MainGroupPage('principles', 'Principles',  [
	generalPage,
	componentsPage,
]);
