import { GroupPage } from '@ds/commons';
import { breadcrumbsPage } from './breadcrumbs/breadcrumbs.page';
import { menuPage } from './menu/menu.page';
import { navSidePage } from './nav-side/nav-side.page';

export const navigationPage = new GroupPage(
	'navigation',
	'Navigation',
	[
		navSidePage,
		menuPage,
		breadcrumbsPage,
	],
);
