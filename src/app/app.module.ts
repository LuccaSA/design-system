import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { LuModule } from '@lucca-front/ng';

import { DsMainModule } from './main/main.module';
import { DsVisualModule } from './visual';
import { DsPrinciplesModule } from './principles';
import { DsComponentsModule } from './components';
import { DsContentModule } from './content';

import { DsNavSideModule } from './nav-side';
import { DsHomeModule } from './home';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { markedOptionsFactory } from './markdown/markedOptions';



@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LuModule,
		HttpClientModule,

		DsHomeModule,
		DsMainModule,
		DsPrinciplesModule,
		DsContentModule,
		DsComponentsModule,
		DsVisualModule,
		DsNavSideModule,

		MarkdownModule.forRoot({
			loader: HttpClient,
			markedOptions: {
				provide: MarkedOptions,
				useFactory: markedOptionsFactory
			}
		}),

		RouterModule.forRoot([], {
			scrollPositionRestoration: 'enabled',
			useHash: true,
		})
	],
	declarations: [
		AppComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
