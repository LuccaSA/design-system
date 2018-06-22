import { Routes } from '@angular/router';
import { LogosComponent } from './logos/logos.component';
import { ColorsComponent } from './colors/colors.component';
import { IllustrateComponent } from './illustrate/illustrate.component';
import { TypographyComponent } from './typography/typography.component';
import { VisualComponent } from './visual.component';

export const visualRouter = [
  { path: 'visual', component: VisualComponent,
    children: [
      { path: '', redirectTo: 'colors', pathMatch: 'full' },
      { path: 'logos', component: LogosComponent },
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'illustrate', component: IllustrateComponent }
    ]
  }
] as Routes;
