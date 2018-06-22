import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VisualModule } from './visual/visual.module';
import { PrinciplesModule } from './principles/principles.module';
import { ComponentsModule } from './components';
import { ContentModule } from './content';

import { appRoutes } from './app.router';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { CommonsModule } from './commons/commons.module';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    PrinciplesModule,
    ContentModule,
    ComponentsModule,
    VisualModule,
    CommonsModule,

    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComponent,
    HomeFooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
