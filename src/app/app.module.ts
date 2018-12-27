import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LuModule } from '@lucca-front/ng';

import { DsMainModule } from './main';

import { DsHomeModule } from './home';

import { AppComponent } from './app.component';
import { DsMarkdownModule } from '@ds/commons';
import { appRoutes, searchableIndex } from './app.router';
import { PAGES_INDEX } from './search';



@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LuModule,

		DsHomeModule,
		DsMainModule,

		DsMarkdownModule.forRoot(),

		RouterModule.forRoot(appRoutes, {
			scrollPositionRestoration: 'enabled',
			useHash: true,
		})
	],
	declarations: [
		AppComponent
	],
	providers: [
		{ provide: PAGES_INDEX, useValue: searchableIndex }
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
