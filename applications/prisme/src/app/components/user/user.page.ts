import { GroupPage } from '@prisme/common';
import { selectPage } from './select/select.page';
import { tilePage } from './tile/tile.page';

export const userPage = new GroupPage(
	'user',
	'Utilisateur',
	[
	tilePage,
	selectPage,
	],
);
