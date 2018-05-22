import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { NavComponent } from './nav/nav.component';
import { NavSideItemComponent } from './nav-side/nav-side-item/nav-side-item.component';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { HeaderComponent } from './header/header.component';
import { NavSideComponent } from './nav-side/nav-side.component';
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
      { path: '', redirectTo: 'buttons', pathMatch: 'full' },

      { path: 'structure-guidelines', component: StructureGuidelinesComponent },
      { path: 'templates', component: TemplatesComponent },
      { path: 'grids', component: GridComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'empty-states', component: EmptyStatesComponent },

      { path: 'menu', component: MenuComponent },
      { path: 'pagination', component: PaginationComponent },

      { path: 'text-guidelines', component: TextGuidelinesComponent },
      { path: 'titles', component: TitlesComponent },
      { path: 'basic-text', component: BasicTextComponent },
      { path: 'labels', component: LabelsComponent },

      { path: 'form-guidelines', component: FormGuidelinesComponent },
      { path: 'textfields', component: TextfieldsComponent },
      { path: 'select', component: SelectComponent },
      { path: 'radios', component: RadiosComponent },
      { path: 'checkboxes', component: CheckboxesComponent },
      { path: 'switches', component: SwitchesComponent },

      { path: 'action-guidelines', component: ActionGuidelinesComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'links', component: LinksComponent },
      { path: 'action-icons', component: ActionIconsComponent },

      { path: 'tables', component: TablesComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'chips', component: ChipsComponent },

      { path: 'modals', component: ModalsComponent },
      { path: 'tooltips', component: TooltipsComponent },

      { path: 'toasts', component: ToastsComponent },
      { path: 'callouts', component: CalloutsComponent },

      { path: 'loadings', component: LoadingsComponent },
      { path: 'progress', component: ProgressComponent },

      { path: 'icons', component: IconsComponent },

      { path: 'utilities', component: UtilitiesComponent },

      { path: 'animations', component: AnimationsComponent },
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
    AnimationsComponent
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
