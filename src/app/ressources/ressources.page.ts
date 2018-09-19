import { RootGroupPage } from '@ds/commons';
import { assetsPage } from './assets/assets.page';
import { applicationsPage } from './applications/applications.page';
import { colorsPage } from './colors/colors.page';

export const ressourcesPage = new RootGroupPage(
	'ressources',
	'Ressources',
	[
		assetsPage,
		applicationsPage,
		colorsPage,
	],
);
