import { GroupPage } from '@prisme/common';
import { emptyStatesPage } from './empty-states/empty-states.page';
import { navigationPage } from './navigation/navigation.page';
import { tablesPage } from './tables/tables.page';

export const componentsPage = new GroupPage(
	'components',
	'Components',
	[
		emptyStatesPage,
		navigationPage,
		tablesPage,
	],
);
