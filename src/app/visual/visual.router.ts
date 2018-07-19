import { Routes } from '@angular/router';
import { LogosComponent } from './logos/logos.component';
import { ColorsComponent } from './colors/colors.component';
import { IllustrateComponent } from './illustrate/illustrate.component';
import { TypographyComponent } from './typography/typography.component';
import { Page, Pages } from '../commons/page/page.model';
import { NavSideComponent } from '../commons/nav-side/nav-side.component';

const colorsPage = new Page('colors', ColorsComponent, 'Couleurs');
const logosPage = new Page('logos', LogosComponent, 'Logos');
const typographyPage = new Page('typography', TypographyComponent, 'Typographie');
const illustratePage = new Page('illustrate', IllustrateComponent, 'Illustration');

export const visualPages = new Pages([
	colorsPage,
	logosPage,
	typographyPage,
	illustratePage
]);

export const visualRouter: Routes = [
  { path: 'visual', children: [
    { path: '', component: NavSideComponent, data: { pages: visualPages }, outlet: 'navSide'},
    { path: '', redirectTo: `/visual/${colorsPage.fullPath}`, pathMatch: 'full' },
    colorsPage.toRoute(visualPages.pages),
    logosPage.toRoute(visualPages.pages),
    typographyPage.toRoute(visualPages.pages),
    illustratePage.toRoute(visualPages.pages)
  ]}
]
