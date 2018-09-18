import { RootGroupPage } from '../commons';
import { actionsPage } from './actions/action.page';
import { feedbackPage } from './feedback/feedback.page';
import { formPage } from './form/form.page';

export const componentsPage = new RootGroupPage('components', 'Components', [
	actionsPage,
	feedbackPage,
	formPage,
]);
