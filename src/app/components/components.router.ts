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

export const componentsRouter = [
  { path: 'components', component: ComponentsComponent,
  children: [
    { path: '', redirectTo: 'templates', pathMatch: 'full' },

    { path: 'structure-guidelines', component: StructureGuidelinesComponent, data: {menuGroup: 'Structure' }},
    { path: 'templates', component: TemplatesComponent, data: {menuGroup: 'Structure' }},
    { path: 'containers', component: ContainersComponent, data: {menuGroup: 'Structure' }},
    { path: 'grids', component: GridComponent, data: {menuGroup: 'Structure' }},
    { path: 'cards', component: CardsComponent, data: {menuGroup: 'Structure' }},
    { path: 'empty-states', component: EmptyStatesComponent, data: {menuGroup: 'Structure' }},

    { path: 'menu', component: MenuComponent, data: {menuGroup: 'Navigation' }},
    { path: 'breadcrumb', component: BreadcrumbsComponent, data: {menuGroup: 'Navigation' }},

    { path: 'text-guidelines', component: TextGuidelinesComponent, data: {menuGroup: 'Texte' }},
    { path: 'titles', component: TitlesComponent, data: {menuGroup: 'Texte' }},
    { path: 'basic-text', component: BasicTextComponent, data: {menuGroup: 'Texte' }},
    { path: 'labels', component: LabelsComponent, data: {menuGroup: 'Texte' }},

    { path: 'form-guidelines', component: FormGuidelinesComponent, data: {menuGroup: 'Formulaires' }},
    { path: 'textfields', component: TextfieldsComponent, data: {menuGroup: 'Formulaires' }},
    { path: 'select', component: SelectComponent, data: {menuGroup: 'Formulaires' }},
    { path: 'radios', component: RadiosComponent, data: {menuGroup: 'Formulaires' }},
    { path: 'checkboxes', component: CheckboxesComponent, data: {menuGroup: 'Formulaires' }},
    { path: 'switches', component: SwitchesComponent, data: {menuGroup: 'Formulaires' }},
    { path: 'files', component: FileComponent, data: {menuGroup: 'Formulaires' }},
    { path: 'framed', component: FramedComponent, data: {menuGroup: 'Formulaires' }},

    { path: 'action-guidelines', component: ActionGuidelinesComponent, data: {menuGroup: 'Actions' }},
    { path: 'buttons', component: ButtonsComponent, data: {menuGroup: 'Actions' }},
    { path: 'links', component: LinksComponent, data: {menuGroup: 'Actions' }},
    { path: 'action-icons', component: ActionIconsComponent, data: {menuGroup: 'Actions' }},

    { path: 'tables', component: TablesComponent, data: {menuGroup: 'Listings' }},
    { path: 'lists', component: ListsComponent, data: {menuGroup: 'Listings' }},
    { path: 'chips', component: ChipsComponent, data: {menuGroup: 'Listings' }},

    { path: 'user-tile', component: UserTileComponent, data: { menuGroup: 'Users' } },

    { path: 'modals', component: ModalsComponent, data: {menuGroup: 'Overlays' }},
    { path: 'tooltips', component: TooltipsComponent, data: {menuGroup: 'Overlays' }},

    { path: 'toasts', component: ToastsComponent, data: {menuGroup: 'Feedback / Information' }},
    { path: 'callouts', component: CalloutsComponent, data: {menuGroup: 'Feedback / Information' }},
    { path: 'boxes', component: BoxesComponent, data: {menuGroup: 'Feedback / Information' }},

    { path: 'loadings', component: LoadingsComponent, data: {menuGroup: 'Chargement' }},
    { path: 'progress', component: ProgressComponent, data: {menuGroup: 'Chargement' }},

    { path: 'icons', component: IconsComponent, data: {menuGroup: 'Icones' }},

    { path: 'utilities', component: UtilitiesComponent, data: {menuGroup: 'Utilitaires' }},
    { path: 'functions', component: FunctionsComponent, data: {menuGroup: 'Utilitaires' }},
    { path: 'mixins', component: MixinsComponent, data: {menuGroup: 'Utilitaires' }},

    { path: 'animations', component: AnimationsComponent, data: {menuGroup: 'Animations'} }
  ]}
] as Routes;
