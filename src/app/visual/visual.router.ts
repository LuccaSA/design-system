import { Routes } from '@angular/router';
import { LogosComponent } from './logos/logos.component';
import { ColorsComponent } from './colors/colors.component';
import { IllustrateComponent } from './illustrate/illustrate.component';
import { TypographyComponent } from './typography/typography.component';
import { VisualComponent } from './visual.component';
import { Page, Pages } from '../commons/page/page.model';

const visualPage = new Page('visual', VisualComponent, 'Visuel');
const colorsPage = new Page('colors', ColorsComponent, 'Couleurs', visualPage);
const logosPage = new Page('logos', LogosComponent, 'Logos', visualPage);
const typographyPage = new Page('typography', TypographyComponent, 'Typographie', visualPage);
const illustratePage = new Page('illustrate', IllustrateComponent, 'Illustration', visualPage);


export const visualRouter = new Pages([
  visualPage,
  colorsPage,
  logosPage,
  typographyPage,
  illustratePage
]).toRoutes();
