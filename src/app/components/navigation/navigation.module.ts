import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { DsMenuModule } from './menu/menu.module';
import { DsBreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsMenuModule,
		DsBreadcrumbsModule
	]
})
export class NavigationModule { }
