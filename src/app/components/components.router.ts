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

const navigationGroup = new Page('navigation', null, 'Navigation');
const menuPage = new Page('menu', MenuComponent, 'Menu', navigationGroup);
const breadcrumbPage = new Page('breadcrumb', BreadcrumbsComponent, 'Breadcrumb', navigationGroup);

const textGroup = new Page('text', null, 'Texte');
const textPage = new Page('guidelines', TextGuidelinesComponent, 'Guidelines', textGroup);
const titlePage = new Page('title', TitlesComponent, 'Titres', textGroup);
const basicTextPage = new Page('basic', BasicTextComponent, 'Typographie', textGroup);
const labelPage = new Page('label', LabelsComponent, 'Labels', textGroup);

const formGroup = new Page('form', null, 'Formulaires');
const formPage = new Page('form-guidelines', FormGuidelinesComponent, 'Formulaires', formGroup);
const textfieldPage = new Page('textfield', TextfieldsComponent, 'Textfields', formGroup);
const selectPage = new Page('selects', SelectComponent, 'Select', formGroup);
const radioPage = new Page('radio', RadiosComponent, 'Radio', formGroup);
const checkboxPage = new Page('checkbox', CheckboxesComponent, 'Checkbox', formGroup);
const switchPage = new Page('switch', SwitchesComponent, 'Switch', formGroup);
const filePage = new Page('file', FileComponent, 'Fichier', formGroup);
const framedPage = new Page('framed', FramedComponent, 'Framed', formGroup);

const actionGroup = new Page('action', null, 'Actions');
const actionPage = new Page('action', ActionGuidelinesComponent, 'Guidelines', actionGroup);
const buttonPage = new Page('button', ButtonsComponent, 'Bouton', actionGroup);
const linkPage = new Page('link', LinksComponent, 'Lien', actionGroup);
const actionIconPage = new Page('action-icon', ActionIconsComponent, "Icones d'action", actionGroup);

const listingGroup = new Page('listing', null, 'Listings');
const tablePage = new Page('table', TablesComponent, 'Tableau', listingGroup);
const listPage = new Page('list', ListsComponent, 'Listes', listingGroup);
const chipPage = new Page('chip', ChipsComponent, 'Chip', listingGroup);

const userTilePage = new Page('user', UserTileComponent, 'User');

const overlayGroup = new Page('overlay', null, 'Overlay');
const modalPage = new Page('modal', ModalsComponent, 'Modale', overlayGroup);
const tooltipsPage = new Page('tooltip', TooltipsComponent, 'Tooltip', overlayGroup);

const feedbackGroup = new Page('feedback', null, 'Feedback');
const toastPage = new Page('toast', ToastsComponent, 'Toast', feedbackGroup);
const calloutPage = new Page('callout', CalloutsComponent, 'Callout', feedbackGroup);
const boxPage = new Page('box', BoxesComponent, 'Boite', feedbackGroup);

const loadingGroup = new Page('loading', null, 'Chargement')
const loadingPage = new Page('loader', LoadingsComponent, 'Loader', loadingGroup);
const progressPage = new Page('progress', ProgressComponent, 'Progression', loadingGroup);

const iconsPage = new Page('icons', IconsComponent, 'Icones');

const utilitiesGroup = new Page('utilities', null, 'Utilitaires');
const utilitiesPage = new Page('classes', UtilitiesComponent, 'Classes CSS', utilitiesGroup);
const functionsPage = new Page('functions', FunctionsComponent, 'Fonctions SCSS', utilitiesGroup);
const mixinsPage = new Page('mixins', MixinsComponent, 'Mixins SCSS', utilitiesGroup);

const animationsPage = new Page('animations', AnimationsComponent, 'Animations');

export const componentsPages = new Pages('components', [
	structureGroup,
	structurePage,
	templatePage,
	containerPage,
	gridPage,
	cardPage,
	emptyStatePage,
	menuPage,
	breadcrumbPage,
	textPage,
	titlePage,
	basicTextPage,
	labelPage,
	formPage,
	textfieldPage,
	selectPage,
	radioPage,
	checkboxPage,
	switchPage,
	filePage,
	framedPage,
	actionPage,
	buttonPage,
	linkPage,
	actionIconPage,
	tablePage,
	listPage,
	chipPage,
	userTilePage,
	modalPage,
	tooltipsPage,
	toastPage,
	calloutPage,
	boxPage,
	loadingPage,
	progressPage,
	iconsPage,
	utilitiesPage,
	functionsPage,
	mixinsPage,
	animationsPage,
	actionGroup,
	feedbackGroup,
	formGroup,
	listingGroup,
	loadingGroup,
	navigationGroup,
	overlayGroup,
	textGroup,
	utilitiesGroup
], structurePage);


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
      menuPage.toRoute(componentsPages.pages),
      breadcrumbPage.toRoute(componentsPages.pages),
      textPage.toRoute(componentsPages.pages),
      titlePage.toRoute(componentsPages.pages),
      basicTextPage.toRoute(componentsPages.pages),
      labelPage.toRoute(componentsPages.pages),
      formPage.toRoute(componentsPages.pages),
      textfieldPage.toRoute(componentsPages.pages),
      selectPage.toRoute(componentsPages.pages),
      radioPage.toRoute(componentsPages.pages),
      checkboxPage.toRoute(componentsPages.pages),
      switchPage.toRoute(componentsPages.pages),
      filePage.toRoute(componentsPages.pages),
      framedPage.toRoute(componentsPages.pages),
      actionPage.toRoute(componentsPages.pages),
      buttonPage.toRoute(componentsPages.pages),
      linkPage.toRoute(componentsPages.pages),
      actionIconPage.toRoute(componentsPages.pages),
      tablePage.toRoute(componentsPages.pages),
      listPage.toRoute(componentsPages.pages),
      chipPage.toRoute(componentsPages.pages),
      userTilePage.toRoute(componentsPages.pages),
      modalPage.toRoute(componentsPages.pages),
      tooltipsPage.toRoute(componentsPages.pages),
      toastPage.toRoute(componentsPages.pages),
      calloutPage.toRoute(componentsPages.pages),
      boxPage.toRoute(componentsPages.pages),
      loadingPage.toRoute(componentsPages.pages),
      progressPage.toRoute(componentsPages.pages),
      iconsPage.toRoute(componentsPages.pages),
      utilitiesPage.toRoute(componentsPages.pages),
      functionsPage.toRoute(componentsPages.pages),
      mixinsPage.toRoute(componentsPages.pages),
      animationsPage.toRoute(componentsPages.pages)
		]
	}
]
