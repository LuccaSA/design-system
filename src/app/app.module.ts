import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LuModule } from '@lucca-front/ng';

import { DsVisualModule } from './visual/visual.module';
import { DsPrinciplesModule } from './principles/principles.module';
import { DsComponentsModule } from './components';
import { DsContentModule } from './content';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { DsCommonsModule } from './commons/commons.module';
import { HeaderComponent } from './header/header.component';
import { DsNavSideModule } from './nav-side/nav-side.module';
import { MainComponent } from './main/main.component';
import { DsSearchModule } from './search/search.module';



@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		DsSearchModule,

		DsPrinciplesModule,
		DsContentModule,
		DsComponentsModule,
		DsVisualModule,
		DsCommonsModule,
		DsNavSideModule,
		LuModule,

		RouterModule.forRoot([])
	],
	declarations: [
		AppComponent,
		SplashComponent,
		HomeComponent,
		HomeFooterComponent,
		HeaderComponent,
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
