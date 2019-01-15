import { GroupPage } from '@prisme/common';
import { chipsPage } from './chips/chips.page';
import { listsPage } from './lists/lists.page';
import { tablesPage } from './tables/tables.page';

export const listingsPage = new GroupPage(
	'listings',
	'Listings',
	[
		chipsPage,
		listsPage,
		tablesPage,
	]
);
