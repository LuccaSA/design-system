import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { BasicExampleComponent } from './basic/basic.component';
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
