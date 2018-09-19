import { GroupPage } from '@ds/commons';
import { boxesPage } from './boxes/boxes.page';
import { calloutsPage } from './callouts/callouts.page';
import { toastsPage } from './toasts/toasts.page';

export const feedbackPage = new GroupPage('feedback', 'Feedback', [
	boxesPage,
	calloutsPage,
	toastsPage,
]);
