import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LuModule } from '@lucca-front/ng';
import { HighlightModule } from 'ngx-highlightjs';

import { DsMainModule } from './main/main.module';
import { DsVisualModule } from './visual';
import { DsPrinciplesModule } from './principles';
import { DsComponentsModule } from './components';
import { DsContentModule } from './content';

import { DsNavSideModule } from './nav-side';
import { DsHomeModule } from './home';

import { AppComponent } from './app.component';



@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,

		LuModule,
		HighlightModule.forRoot({theme: 'vs2015'}),

		DsHomeModule,
		DsMainModule,
		DsPrinciplesModule,
		DsContentModule,
		DsComponentsModule,
		DsVisualModule,
		DsNavSideModule,

		RouterModule.forRoot([])
	],
	declarations: [
		AppComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
