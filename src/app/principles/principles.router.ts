import { Routes } from '@angular/router';

import { PrinciplesComponent } from './principles.component';
import { VisionComponent } from './vision/vision.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { Page, Pages } from '../commons/page/page.model';

const principlesPage = new Page('principles', PrinciplesComponent, 'Principes');
const visionPage = new Page('vision', VisionComponent, 'Vision', principlesPage);
const accessibilityPage = new Page('accessibility', AccessibilityComponent, 'Accessibilité', principlesPage);

export const principlesPages: Pages = new Pages([
  principlesPage,
  visionPage,
  accessibilityPage
]);

export const principlesRouter: Routes = [];
