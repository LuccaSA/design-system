import { VisionComponent } from './vision/vision.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { Page, Pages } from '../commons/page/page.model';

const visionPage = new Page('vision', VisionComponent, 'Vision');
const accessibilityPage = new Page('accessibility', AccessibilityComponent, 'Accessibilité');

export const principlesPages: Pages = new Pages('principles', [
	visionPage,
	accessibilityPage
], visionPage);

// export const principlesRouter: Routes = [];
