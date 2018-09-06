import { GroupPage } from '../../commons';
import { boxesPage } from './boxes/boxes.page';

export const feedbackPage = new GroupPage('feedback', 'Feedback', [
	boxesPage,
]);
