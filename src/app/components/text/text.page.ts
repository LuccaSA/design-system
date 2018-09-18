import { GroupPage } from '@ds/commons';
import { basicTextPage } from './basic-text/basic-text.page';
import { iconsPage } from './icons/icons.page';
import { labelsPage } from './labels/labels.page';
import { titlesPage } from './titles/titles.page';

export const textPage = new GroupPage(
	'text',
	'Text',
	[
		basicTextPage,
		iconsPage,
		labelsPage,
		titlesPage,
	],
);
