import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.router';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HeaderModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes, {
			useHash: true,
		})
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
