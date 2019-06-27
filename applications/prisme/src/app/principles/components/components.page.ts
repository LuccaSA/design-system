import { GroupPage } from '@prisme/common';
import { tablesPage } from './tables/tables.page';

export const componentsPage = new GroupPage(
	'components',
	'Components',
	[
		tablesPage,
	],
);
