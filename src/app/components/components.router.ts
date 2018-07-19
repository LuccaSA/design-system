import { Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { StructureGuidelinesComponent } from './layout/structure-guidelines/structure-guidelines.component';
import { TemplatesComponent } from './layout/templates/templates.component';
import { ContainersComponent } from './layout/containers/containers.component';
import { GridComponent } from './layout/grid/grid.component';
import { CardsComponent } from './layout/cards/cards.component';
import { EmptyStatesComponent } from './layout/empty-states/empty-states.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { BreadcrumbsComponent } from './navigation/breadcrumbs/breadcrumbs.component';
import { TextGuidelinesComponent } from './text/text-guidelines/text-guidelines.component';
import { TitlesComponent } from './text/titles/titles.component';
import { BasicTextComponent } from './text/basic-text/basic-text.component';
import { LabelsComponent } from './text/labels/labels.component';
import { FormGuidelinesComponent } from './form/form-guidelines/form-guidelines.component';
import { TextfieldsComponent } from './form/textfields/textfields.component';
import { SelectComponent } from './form/select/select.component';
import { RadiosComponent } from './form/radios/radios.component';
import { CheckboxesComponent } from './form/checkboxes/checkboxes.component';
import { SwitchesComponent } from './form/switches/switches.component';
import { FileComponent } from './form/file/file.component';
import { FramedComponent } from './form/framed/framed.component';
import { ActionGuidelinesComponent } from './actions/action-guidelines/action-guidelines.component';
import { ButtonsComponent } from './actions/buttons/buttons.component';
import { LinksComponent } from './actions/links/links.component';
import { ActionIconsComponent } from './actions/action-icons/action-icons.component';
import { TablesComponent } from './listings/tables/tables.component';
import { ListsComponent } from './listings/lists/lists.component';
import { ChipsComponent } from './listings/chips/chips.component';
import { ModalsComponent } from './overlays/modals/modals.component';
import { TooltipsComponent } from './overlays/tooltips/tooltips.component';
import { ToastsComponent } from './feedback/toasts/toasts.component';
import { CalloutsComponent } from './feedback/callouts/callouts.component';
import { BoxesComponent } from './feedback/boxes/boxes.component';
import { LoadingsComponent } from './loaders/loadings/loadings.component';
import { ProgressComponent } from './loaders/progress/progress.component';
import { IconsComponent } from './icons/icons.component';
import { UtilitiesComponent } from './misc/utilities/utilities.component';
import { FunctionsComponent } from './misc/functions/functions.component';
import { MixinsComponent } from './misc/mixins/mixins.component';
import { AnimationsComponent } from './animations/animations.component';
import { UserTileComponent } from './users/user-tile/user-tile.component';
import { Page, Pages } from '../commons/page/page.model';
import { NavSideComponent } from '../commons/nav-side/nav-side.component';

const structureGroup = new Page('structure', null, 'Structure');
const structurePage = new Page('guidelines', StructureGuidelinesComponent, 'Guidelines', structureGroup);
const templatePage = new Page('template', TemplatesComponent, 'Templates', structureGroup);
const containerPage = new Page('container', ContainersComponent, 'Containers', structureGroup);
const gridPage = new Page('grid', GridComponent, 'Grid', structureGroup);
const cardPage = new Page('card', CardsComponent, 'Cards', structureGroup);
const emptyStatePage = new Page('empty-state', EmptyStatesComponent, 'Empty states', structureGroup);

// const menuPage = new Page('menu', MenuComponent, 'Menu', componentsPage);
// const breadcrumbPage = new Page('breadcrumb', BreadcrumbsComponent, 'Breadcrumb', menuPage);

// const textPage = new Page('text-guidelines', TextGuidelinesComponent, 'Texte', componentsPage);
// const titlePage = new Page('title', TitlesComponent, 'Titres', textPage);
// const basicTextPage = new Page('basic', BasicTextComponent, 'Typographie', textPage);
// const labelPage = new Page('label', LabelsComponent, 'Labels', textPage);

// const formPage = new Page('form-guidelines', FormGuidelinesComponent, 'Formulaires', componentsPage);
// const textfieldPage = new Page('textfield', TextfieldsComponent, 'Textfields', formPage);
// const selectPage = new Page('selects', SelectComponent, 'Select', formPage);
// const radioPage = new Page('radio', RadiosComponent, 'Radio', formPage);
// const checkboxPage = new Page('checkbox', CheckboxesComponent, 'Checkbox', formPage);
// const switchPage = new Page('switch', SwitchesComponent, 'Switch', formPage);
// const filePage = new Page('file', FileComponent, 'Fichier', formPage);
// const framedPage = new Page('framed', FramedComponent, 'Framed', formPage);

// const actionPage = new Page('action', ActionGuidelinesComponent, 'Actions', componentsPage);
// const buttonPage = new Page('button', ButtonsComponent, 'Bouton', actionPage);
// const linkPage = new Page('link', LinksComponent, 'Lien', actionPage);
// const actionIconPage = new Page('action-icon', ActionIconsComponent, "Icones d'action", componentsPage);

// const tablePage = new Page('table', TablesComponent, 'Tableau', componentsPage);
// const listPage = new Page('list', ListsComponent, 'Listes', tablePage);
// const chipPage = new Page('chip', ChipsComponent, 'Chip', tablePage);

const userTilePage = new Page('user', UserTileComponent, 'User');

// const modalPage = new Page('modal', ModalsComponent, 'Modale', componentsPage);
// const tooltipsPage = new Page('tooltip', TooltipsComponent, 'Tooltip', modalPage);

// const toastPage = new Page('toast', ToastsComponent, 'Toast', componentsPage);
// const calloutPage = new Page('callout', CalloutsComponent, 'Callout', toastPage);
// const boxPage = new Page('box', BoxesComponent, 'Boite', toastPage);

// const loadingPage = new Page('loading', LoadingsComponent, 'Chargement', componentsPage);
// const progressPage = new Page('progress', ProgressComponent, 'Progression', loadingPage);

// const iconsPage = new Page('icons', IconsComponent, 'Icones', componentsPage);

// const utilitiesPage = new Page('utilities', UtilitiesComponent, 'Utilitaires', componentsPage);
// const functionsPage = new Page('functions', FunctionsComponent, 'Fonctions', utilitiesPage);
// const mixinsPage = new Page('mixins', MixinsComponent, 'Mixins', utilitiesPage);

// const animationsPage = new Page('animations', AnimationsComponent, 'Animations', componentsPage);

export const componentsPages = new Pages([
  structureGroup,
	structurePage,
	templatePage,
	containerPage,
	gridPage,
	cardPage,
	emptyStatePage,
	// menuPage,
	// breadcrumbPage,
	// textPage,
	// titlePage,
	// basicTextPage,
	// labelPage,
	// formPage,
	// textfieldPage,
	// selectPage,
	// radioPage,
	// checkboxPage,
	// switchPage,
	// filePage,
	// framedPage,
	// actionPage,
	// buttonPage,
	// linkPage,
	// actionIconPage,
	// tablePage,
	// listPage,
	// chipPage,
	userTilePage,
	// modalPage,
	// tooltipsPage,
	// toastPage,
	// calloutPage,
	// boxPage,
	// loadingPage,
	// progressPage,
	// iconsPage,
	// utilitiesPage,
	// functionsPage,
	// mixinsPage,
	// animationsPage
]);


export const componentsRouter: Routes = [
  {
    path: 'components', children: [
      { path: '', component: NavSideComponent, data: { pages: componentsPages }, outlet: 'navSide' },
      { path: '', redirectTo: `/components/${structurePage.fullPath}`, pathMatch: 'full' },
      structurePage.toRoute(componentsPages.pages),
      templatePage.toRoute(componentsPages.pages),
      containerPage.toRoute(componentsPages.pages),
      gridPage.toRoute(componentsPages.pages),
      cardPage.toRoute(componentsPages.pages),
      emptyStatePage.toRoute(componentsPages.pages),
      userTilePage.toRoute(componentsPages.pages)
    ]
  }
]
