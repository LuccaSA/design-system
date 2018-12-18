import { RootGroupPage } from '@ds/commons';
import { actionsPage } from './actions/action.page';
import { feedbackPage } from './feedback/feedback.page';
import { formPage } from './form/form.page';
import { layoutPage } from './layout/layout.page';
import { listingsPage } from './listings/listings.page';
import { loadersPage } from './loaders/loaders.page';
import { miscPage } from './misc/misc.page';
import { navigationPage } from './navigation/navigation.page';
import { overlaysPage } from './overlays/overlays.page';
import { textPage } from './text/text.page';
import { usersPage } from './users/users.page';

export const componentsPage = new RootGroupPage('components', 'Components', [
	layoutPage,
	navigationPage,
	textPage,
	formPage,
	actionsPage,
	listingsPage,
	usersPage,
	overlaysPage,
	feedbackPage,
	loadersPage,
	miscPage,
]);