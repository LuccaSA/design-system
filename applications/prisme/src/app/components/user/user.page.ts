import { GroupPage } from '@prisme/common';
import { selectPage } from './select/select.page';
import { tilePage } from './tile/tile.page';
import { displayPage } from './display/display.page';

export const userPage = new GroupPage(
	'user',
	'Utilisateur',
	[
	displayPage,
	tilePage,
	selectPage,
	],
);
