import { GroupPage } from '@ds/commons';
import { animationsPage } from './animations/animations.page';
import { functionsPage } from './functions/functions.page';
import { mixinsPage } from './mixins/mixins.page';
import { utilitiesPage } from './utilities/utilities.page';

export const miscPage = new GroupPage(
	'misc',
	'Misc',
	[
		animationsPage,
		functionsPage,
		mixinsPage,
		utilitiesPage,
	]
);
