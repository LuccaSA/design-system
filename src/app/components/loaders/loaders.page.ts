import { GroupPage } from '@ds/commons';
import { loadingsPage } from './loadings/loadings.page';
import { progressPage } from './progress/progress.page';

export const loadersPage = new GroupPage(
	'loaders',
	'Loaders',
	[
		loadingsPage,
		progressPage,
	]
);
