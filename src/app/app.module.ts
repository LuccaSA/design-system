import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LuPopoverModule } from '@lucca-front/ng';

import { VisualModule } from './visual/visual.module';
import { PrinciplesModule } from './principles/principles.module';
import { ComponentsModule } from './components';
import { ContentModule } from './content';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { CommonsModule } from './commons/commons.module';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
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
		LuPopoverModule,

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
