import { GroupPage } from '@ds/commons';
import { userTilePage } from './user-tile/user-tile.page';

export const usersPage = new GroupPage(
	'users',
	'Users',
	[
		userTilePage,
	],
);
