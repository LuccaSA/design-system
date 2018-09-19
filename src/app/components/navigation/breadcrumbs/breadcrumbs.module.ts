import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		BreadcrumbsComponent,
		BasicExampleComponent
	],
	entryComponents: [
		BreadcrumbsComponent,
		BasicExampleComponent
	]
})
export class DsBreadcrumbsModule { }
