import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	imports: [
		DsCommonsModule
	],
	entryComponents: [
		BreadcrumbsComponent,
		MenuComponent,
	],
	declarations: [
		BreadcrumbsComponent,
		MenuComponent,
	]
})
export class NavigationModule { }
