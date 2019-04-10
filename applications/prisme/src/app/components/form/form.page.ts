import { GroupPage } from '@prisme/common';
import { checkboxesPage } from './checkboxes/checkboxes.page';
import { filePage } from './file/file.page';
import { framedPage } from './framed/framed.page';
import { radiosPage } from './radios/radios.page';
import { switchesPage } from './switches/switches.page';
import { textfieldsPage } from './textfields/textfields.page';
import { radioButtonsPage } from './radio-buttons';
import { selectPage } from './select/select.page';

export const formPage = new GroupPage(
	'form',
	'Formulaires',
	[
	selectPage,
		textfieldsPage,
		checkboxesPage,
		radiosPage,
		radioButtonsPage,
		switchesPage,
		filePage,
		framedPage,
	]
);
