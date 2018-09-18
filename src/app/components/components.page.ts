import { RootGroupPage } from '../commons';
import { actionsPage } from './actions/action.page';
import { feedbackPage } from './feedback/feedback.page';
import { formPage } from './form/form.page';
import { layoutPage } from './layout/layout.page';
import { listingsPage } from './listings/listings.page';
import { loadersPage } from './loaders/loaders.page';

export const componentsPage = new RootGroupPage('components', 'Components', [
	actionsPage,
	feedbackPage,
	formPage,
	layoutPage,
	listingsPage,
	loadersPage,
]);
