import { NgModule } from '@angular/core';
import { DsHeaderModule } from '../header';
import { DsSearchModule } from '../search';
import { DsCommonsModule } from '../commons';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeComponent } from './home.component';


@NgModule({
	imports: [
		DsHeaderModule,
		DsCommonsModule,
		DsSearchModule
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
