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
import { SearchComponent } from './search/search.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { NavSideItemComponent } from './nav-side/nav-side-item/nav-side-item.component';
import { NavSideModule } from './nav-side/nav-side.module';
import { MainComponent } from './main/main.component';



@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,

		PrinciplesModule,
		ContentModule,
		ComponentsModule,
		VisualModule,
		CommonsModule,
		NavSideModule,

		RouterModule.forRoot([])
	],
	declarations: [
		AppComponent,
		SplashComponent,
		HomeComponent,
		HomeFooterComponent,
		SearchComponent,
		HeaderComponent,
		NavComponent,
		MainComponent
	],
	entryComponents: [
		HomeComponent,
		HomeFooterComponent,
		MainComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
