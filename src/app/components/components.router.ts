import { TemplatesComponent } from './layout/templates/templates.component';
import { ContainersComponent } from './layout/containers/containers.component';
import { GridComponent } from './layout/grid/grid.component';
import { CardsComponent } from './layout/cards/cards.component';
import { EmptyStatesComponent } from './layout/empty-states/empty-states.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { BreadcrumbsComponent } from './navigation/breadcrumbs/breadcrumbs.component';
import { TitlesComponent } from './text/titles/titles.component';
import { BasicTextComponent } from './text/basic-text/basic-text.component';
import { LabelsComponent } from './text/labels/labels.component';
import { IconsComponent } from './text/icons/icons.component';
import { TextfieldsComponent } from './form/textfields/textfields.component';
import { SelectComponent } from './form/select/select.component';
import { RadiosComponent } from './form/radios/radios.component';
import { CheckboxesComponent } from './form/checkboxes/checkboxes.component';
import { SwitchesComponent } from './form/switches/switches.component';
import { FileComponent } from './form/file/file.component';
import { FramedComponent } from './form/framed/framed.component';
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
import { UtilitiesComponent } from './misc/utilities/utilities.component';
import { FunctionsComponent } from './misc/functions/functions.component';
import { MixinsComponent } from './misc/mixins/mixins.component';
import { AnimationsComponent } from './misc/animations/animations.component';
import { UserTileComponent } from './users/user-tile/user-tile.component';
import { Page, Pages } from '../commons/page/page.model';
import { NavSideComponent } from './navigation/nav-side/nav-side.component';

const structureGroup = new Page('structure', null, 'Structure');
const templatePage = new Page('template', TemplatesComponent, 'Templates', structureGroup);
const containerPage = new Page('container', ContainersComponent, 'Containers', structureGroup);
const gridPage = new Page('grid', GridComponent, 'Grid', structureGroup);
const cardPage = new Page('card', CardsComponent, 'Cards', structureGroup);
const emptyStatePage = new Page('empty-state', EmptyStatesComponent, 'Empty states', structureGroup);

const navigationGroup = new Page('navigation', null, 'Navigation');
const navSidePage = new Page('navside', NavSideComponent, 'Menu principal', navigationGroup, ['navside']);
const menuPage = new Page('menu', MenuComponent, 'Menu', navigationGroup);
const breadcrumbPage = new Page('breadcrumb', BreadcrumbsComponent, 'Breadcrumb', navigationGroup);

const textGroup = new Page('text', null, 'Texte');
const titlePage = new Page('title', TitlesComponent, 'Titres', textGroup);
const basicTextPage = new Page('basic', BasicTextComponent, 'Typographie', textGroup);
const labelPage = new Page('label', LabelsComponent, 'Labels', textGroup);
const iconsPage = new Page('icons', IconsComponent, 'Icones', textGroup);

const formGroup = new Page('form', null, 'Formulaires');
const textfieldPage = new Page('textfield', TextfieldsComponent, 'Textfields', formGroup);
const selectPage = new Page('selects', SelectComponent, 'Select', formGroup);
const radioPage = new Page('radio', RadiosComponent, 'Radio', formGroup);
const checkboxPage = new Page('checkbox', CheckboxesComponent, 'Checkbox', formGroup);
const switchPage = new Page('switch', SwitchesComponent, 'Switch', formGroup);
const filePage = new Page('file', FileComponent, 'Fichier', formGroup);
const framedPage = new Page('framed', FramedComponent, 'Framed', formGroup);

const actionGroup = new Page('action', null, 'Actions');
const buttonPage = new Page('button', ButtonsComponent, 'Bouton', actionGroup);
const linkPage = new Page('link', LinksComponent, 'Lien', actionGroup);
const actionIconPage = new Page('action-icon', ActionIconsComponent, "Icones d'action", actionGroup);

const listingGroup = new Page('listing', null, 'Listings');
const tablePage = new Page('table', TablesComponent, 'Tableau', listingGroup);
const listPage = new Page('list', ListsComponent, 'Listes', listingGroup);
const chipPage = new Page('chip', ChipsComponent, 'Chip', listingGroup);

const userGroup = new Page('user', null, 'Utilisateur');
const userTilePage = new Page('user-tile', UserTileComponent, 'User tile', userGroup);

const overlayGroup = new Page('overlay', null, 'Overlay');
const modalPage = new Page('modal', ModalsComponent, 'Modale', overlayGroup);
const tooltipsPage = new Page('tooltip', TooltipsComponent, 'Tooltip', overlayGroup);

const feedbackGroup = new Page('feedback', null, 'Feedback');
const toastPage = new Page('toast', ToastsComponent, 'Toast', feedbackGroup);
const calloutPage = new Page('callout', CalloutsComponent, 'Callout', feedbackGroup);
const boxPage = new Page('box', BoxesComponent, 'Boite', feedbackGroup);

const loadingGroup = new Page('loading', null, 'Chargement');
const loadingPage = new Page('loader', LoadingsComponent, 'Loader', loadingGroup);
const progressPage = new Page('progress', ProgressComponent, 'Progression', loadingGroup);

const utilitiesGroup = new Page('utilities', null, 'Utilitaires');
const animationsPage = new Page('animations', AnimationsComponent, 'Animations CSS', utilitiesGroup);
const utilitiesPage = new Page('classes', UtilitiesComponent, 'Classes CSS', utilitiesGroup);
const functionsPage = new Page('functions', FunctionsComponent, 'Fonctions SCSS', utilitiesGroup);
const mixinsPage = new Page('mixins', MixinsComponent, 'Mixins SCSS', utilitiesGroup);

export const componentsPages = new Pages('components', [
	structureGroup,
	templatePage,
	navSidePage,
	containerPage,
	gridPage,
	cardPage,
	emptyStatePage,

	navigationGroup,
	menuPage,
	breadcrumbPage,

	textGroup,
	titlePage,
	basicTextPage,
	labelPage,
	iconsPage,

	formGroup,
	textfieldPage,
	selectPage,
	radioPage,
	checkboxPage,
	switchPage,
	filePage,
	framedPage,

	actionGroup,
	buttonPage,
	linkPage,
	actionIconPage,

	listingGroup,
	tablePage,
	listPage,
	chipPage,

	userGroup,
	userTilePage,

	overlayGroup,
	modalPage,
	tooltipsPage,

	feedbackGroup,
	toastPage,
	calloutPage,
	boxPage,

	loadingGroup,
	loadingPage,
	progressPage,

	utilitiesGroup,
	animationsPage,
	utilitiesPage,
	functionsPage,
	mixinsPage,

], templatePage);
