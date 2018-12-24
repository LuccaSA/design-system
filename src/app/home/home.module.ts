import { NgModule } from '@angular/core';
import { DsSearchModule } from '../search';
import { DsCommonsModule } from '@ds/commons';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { DsHeaderModule } from '../header';


@NgModule({
	imports: [
		DsCommonsModule,
		RouterModule,
		DsSearchModule,
		DsHeaderModule,
	],
	declarations: [
		HomeSplashComponent,
		HomeFooterComponent,
		HomeComponent
	],
	entryComponents: [
		HomeComponent
	]
})
export class DsHomeModule { }
