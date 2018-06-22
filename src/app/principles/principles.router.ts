import { Routes } from '@angular/router';

import { PrinciplesComponent } from './principles.component';
import { VisionComponent } from './vision/vision.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';

export const principlesRouter = [
  { path: 'principles', component: PrinciplesComponent,
    children: [
      { path: '', redirectTo: 'vision', pathMatch: 'full' },
      { path: 'vision', component: VisionComponent },
      { path: 'accessibility', component: AccessibilityComponent }
    ]
  },
] as Routes;
