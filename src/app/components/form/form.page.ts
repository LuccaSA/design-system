import { GroupPage } from '@ds/commons';
import { checkboxesPage } from './checkboxes/checkboxes.page';
import { filePage } from './file/file.page';
import { framedPage } from './framed/framed.page';
import { radiosPage } from './radios/radios.page';
import { selectPage } from './select/select.page';
import { switchesPage } from './switches/switches.page';
import { textfieldsPage } from './textfields/textfields.page';
import { radioButtonsPage } from './radio-buttons';

export const formPage = new GroupPage(
	'form',
	'Formulaires',
	[
		textfieldsPage,
		selectPage,
		checkboxesPage,
		radiosPage,
		radioButtonsPage,
		switchesPage,
		filePage,
		framedPage,
	]
);
