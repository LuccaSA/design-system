import { GroupPage } from '@prisme/common';
import { breadcrumbsPage } from './breadcrumbs/breadcrumbs.page';
import { menuPage } from './menu/menu.page';
import { navSidePage } from './nav-side/nav-side.page';

export const navigationPage = new GroupPage(
	'navigation',
	'Navigation',
	[
		breadcrumbsPage,
		menuPage,
		navSidePage,
	],
);
