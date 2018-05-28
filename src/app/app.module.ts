import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { NavComponent } from './nav/nav.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { NavSideItemComponent } from './nav-side/nav-side-item/nav-side-item.component';
import { NavSideGroupComponent } from './nav-side/nav-side-group/nav-side-group.component';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { HeaderComponent } from './header/header.component';
import { ToolComponent } from './tool/tool.component';
import { PrinciplesComponent } from './principles/principles.component';
import { VisionComponent } from './principles/vision/vision.component';
import { AccessibilityComponent } from './principles/accessibility/accessibility.component';
import { ContentComponent } from './content/content.component';
import { VoiceComponent } from './content/voice/voice.component';
import { VocabularyComponent } from './content/vocabulary/vocabulary.component';
import { PonctuationComponent } from './content/ponctuation/ponctuation.component';
import { TypogrpahicRulesComponent } from './content/typogrpahic-rules/typogrpahic-rules.component';
import { FormatComponent } from './content/format/format.component';
import { VisualComponent } from './visual/visual.component';
import { LogosComponent } from './visual/logos/logos.component';
import { ColorsComponent } from './visual/colors/colors.component';
import { TypographyComponent } from './visual/typography/typography.component';
import { IconsComponent } from './visual/icons/icons.component';
import { IllustrateComponent } from './visual/illustrate/illustrate.component';
import { ComponentsComponent } from './components/components.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { LabelsComponent } from './components/labels/labels.component';
import { StructureGuidelinesComponent } from './components/structure-guidelines/structure-guidelines.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { GridComponent } from './components/grid/grid.component';
import { CardsComponent } from './components/cards/cards.component';
import { EmptyStatesComponent } from './components/empty-states/empty-states.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TextGuidelinesComponent } from './components/text-guidelines/text-guidelines.component';
import { TitlesComponent } from './components/titles/titles.component';
import { BasicTextComponent } from './components/basic-text/basic-text.component';
import { FormGuidelinesComponent } from './components/form-guidelines/form-guidelines.component';
import { TextfieldsComponent } from './components/textfields/textfields.component';
import { SelectComponent } from './components/select/select.component';
import { RadiosComponent } from './components/radios/radios.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { ActionGuidelinesComponent } from './components/action-guidelines/action-guidelines.component';
import { LinksComponent } from './components/links/links.component';
import { ActionIconsComponent } from './components/action-icons/action-icons.component';
import { TablesComponent } from './components/tables/tables.component';
import { ListsComponent } from './components/lists/lists.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ModalsComponent } from './components/modals/modals.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { CalloutsComponent } from './components/callouts/callouts.component';
import { LoadingsComponent } from './components/loadings/loadings.component';
import { ProgressComponent } from './components/progress/progress.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { ContainersComponent } from './components/containers/containers.component';
import { FileComponent } from './components/file/file.component';
import { FramedComponent } from './components/framed/framed.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'principles', component: PrinciplesComponent,
    children: [
      { path: '', redirectTo: 'vision', pathMatch: 'full' },
      { path: 'vision', component: VisionComponent },
      { path: 'accessibility', component: AccessibilityComponent }
    ]
  },
  { path: 'content', component: ContentComponent,
    children: [
      { path: '', redirectTo: 'voice', pathMatch: 'full' },
      { path: 'voice', component: VoiceComponent },
      { path: 'vocabulary', component: VocabularyComponent },
      { path: 'ponctuation', component: PonctuationComponent },
      { path: 'format', component: FormatComponent },
      { path: 'typographic-rules', component: TypogrpahicRulesComponent }
    ]
  },
  { path: 'visual', component: VisualComponent,
    children: [
      { path: '', redirectTo: 'logos', pathMatch: 'full' },
      { path: 'logos', component: LogosComponent },
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'illustrate', component: IllustrateComponent }
    ]
  },
  { path: 'components', component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'grids', pathMatch: 'full' },

      { path: 'structure-guidelines', component: StructureGuidelinesComponent, data: {menuGroup: 'Structure' }},
      { path: 'templates', component: TemplatesComponent, data: {menuGroup: 'Structure' }},
      { path: 'containers', component: ContainersComponent, data: {menuGroup: 'Structure' }},
      { path: 'grids', component: GridComponent, data: {menuGroup: 'Structure' }},
      { path: 'cards', component: CardsComponent, data: {menuGroup: 'Structure' }},
      { path: 'empty-states', component: EmptyStatesComponent, data: {menuGroup: 'Structure' }},

      { path: 'menu', component: MenuComponent, data: {menuGroup: 'Navigation' }},
      { path: 'pagination', component: PaginationComponent, data: {menuGroup: 'Navigation' }},

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

      { path: 'modals', component: ModalsComponent, data: {menuGroup: 'Overlay' }},
      { path: 'tooltips', component: TooltipsComponent, data: {menuGroup: 'Overlay' }},

      { path: 'toasts', component: ToastsComponent, data: {menuGroup: 'Feedback / Information' }},
      { path: 'callouts', component: CalloutsComponent, data: {menuGroup: 'Feedback / Information' }},

      { path: 'loadings', component: LoadingsComponent, data: {menuGroup: 'Chargement' }},
      { path: 'progress', component: ProgressComponent, data: {menuGroup: 'Chargement' }},

      { path: 'icons', component: IconsComponent, data: {menuGroup: 'Icones' }},

      { path: 'utilities', component: UtilitiesComponent, data: {menuGroup: 'Utilitaires' }},

      { path: 'animations', component: AnimationsComponent, data: {menuGroup: 'Animations'} }
    ]},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NavComponent,
    HomeComponent,
    VisualComponent,
    ContentComponent,
    VoiceComponent,
    ComponentsComponent,
    NavSideComponent,
    HeaderComponent,
    NavSideItemComponent,
    VocabularyComponent,
    PonctuationComponent,
    LogosComponent,
    ColorsComponent,
    TypographyComponent,
    ButtonsComponent,
    HomeFooterComponent,
    LabelsComponent,
    PrinciplesComponent,
    ToolComponent,
    FormatComponent,
    TypogrpahicRulesComponent,
    IconsComponent,
    IllustrateComponent,
    VisionComponent,
    AccessibilityComponent,
    StructureGuidelinesComponent,
    TemplatesComponent,
    GridComponent,
    CardsComponent,
    EmptyStatesComponent,
    MenuComponent,
    PaginationComponent,
    TextGuidelinesComponent,
    TitlesComponent,
    BasicTextComponent,
    FormGuidelinesComponent,
    TextfieldsComponent,
    SelectComponent,
    RadiosComponent,
    CheckboxesComponent,
    SwitchesComponent,
    ActionGuidelinesComponent,
    LinksComponent,
    ActionIconsComponent,
    TablesComponent,
    ListsComponent,
    ChipsComponent,
    ModalsComponent,
    TooltipsComponent,
    ToastsComponent,
    CalloutsComponent,
    LoadingsComponent,
    ProgressComponent,
    UtilitiesComponent,
    AnimationsComponent,
    NavSideGroupComponent,
    ContainersComponent,
    FileComponent,
    FramedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
  )],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
