import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { MenuModule } from './menu/menu.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { NavSideModule } from './nav-side/nav-side.module';

@NgModule({
	imports: [
		CommonModule,
		NavSideModule,
		MenuModule,
		BreadcrumbsModule
	]
})
export class NavigationModule { }
