import { generalPage } from './general/general.page';
import { componentsPage } from './components/components.page';
import { MainGroupPage } from '../main';
import { contentPage } from './content';

export const principlesPage = new MainGroupPage('principles', 'Principles',  [
	generalPage,
	componentsPage,
	contentPage,
]);
