import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LuModule } from '@lucca-front/ng';
import { HighlightModule } from 'ngx-highlightjs';

import { DsVisualModule } from './visual';
import { DsPrinciplesModule } from './principles';
import { DsComponentsModule } from './components';
import { DsContentModule } from './content';

import { DsCommonsModule } from './commons';
import { DsNavSideModule } from './nav-side';
import { DsSearchModule } from './search';
import { DsHeaderModule } from './header';
import { DsHomeModule } from './home';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';



@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,

		LuModule,
		HighlightModule.forRoot({theme: 'vs2015'}),

		DsSearchModule,
		DsHeaderModule,
		DsCommonsModule,

		DsHomeModule,
		DsPrinciplesModule,
		DsContentModule,
		DsComponentsModule,
		DsVisualModule,
		DsNavSideModule,

		RouterModule.forRoot([])
	],
	declarations: [
		AppComponent,
		MainComponent
	],
	entryComponents: [
		MainComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
