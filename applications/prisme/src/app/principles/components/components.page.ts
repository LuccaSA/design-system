import { GroupPage } from '@prisme/common';
import { navigationPage } from './navigation/navigation.page';
import { tablesPage } from './tables/tables.page';

export const componentsPage = new GroupPage(
	'components',
	'Components',
	[
		navigationPage,
		tablesPage,
	],
);
