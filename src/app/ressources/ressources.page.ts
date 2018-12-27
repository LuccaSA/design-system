import { assetsPage } from './assets/assets.page';
import { applicationsPage } from './applications/applications.page';
import { colorsPage } from './colors/colors.page';
import { MainGroupPage } from '../main';
import { DsRessourcesModule } from './ressources.module';

export const ressourcesPage = new MainGroupPage(
	'ressources',
	'Ressources',
	[
		assetsPage,
		applicationsPage,
		colorsPage,
	],
);
