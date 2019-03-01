import { GroupPage } from '@prisme/common';
import { cardsPage } from './cards/cards.page';
import { emptyStatesPage } from './empty-states/empty-states.page';
import { navigationPage } from './navigation/navigation.page';
import { tablesPage } from './tables/tables.page';

export const componentsPage = new GroupPage(
	'components',
	'Components',
	[
		cardsPage,
		emptyStatesPage,
		navigationPage,
		tablesPage,
	],
);
