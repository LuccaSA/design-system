import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { VisualComponent } from './visual/visual.component';
import { ContentComponent } from './content/content.component';
import { VoiceComponent } from './content/voice/voice.component';
import { ComponentsComponent } from './components/components.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { HeaderComponent } from './header/header.component';
import { NavSideItemComponent } from './nav-side/nav-side-item/nav-side-item.component';
import { VocabularyComponent } from './content/vocabulary/vocabulary.component';
import { PonctuationComponent } from './content/ponctuation/ponctuation.component';
import { LogosComponent } from './visual/logos/logos.component';
import { ColorsComponent } from './visual/colors/colors.component';
import { TypographyComponent } from './visual/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { LabelsComponent } from './components/labels/labels.component';
import { PrinciplesComponent } from './principles/principles.component';
import { ToolComponent } from './tool/tool.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'principles', component: PrinciplesComponent },
  { path: 'content', component: ContentComponent,
    children: [
      { path: '', redirectTo: 'voice', pathMatch: 'full' },
      { path: 'voice', component: VoiceComponent },
      { path: 'vocabulary', component: VocabularyComponent },
      { path: 'ponctuation', component: PonctuationComponent }
    ]
  },
  { path: 'visual', component: VisualComponent,
    children: [
      { path: '', redirectTo: 'logos', pathMatch: 'full' },
      { path: 'logos', component: LogosComponent },
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent }
    ]
  },
  { path: 'components', component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'buttons', pathMatch: 'full' },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'labels', component: LabelsComponent }
    ] },
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
    ToolComponent
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
