import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { DsMenuModule } from './menu/menu.module';
import { DsBreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { DsNavSideModule } from './nav-side/nav-side.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsNavSideModule,
		DsMenuModule,
		DsBreadcrumbsModule
	]
})
export class NavigationModule { }
