import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { contentPage } from './content.page';

@NgModule({
	imports: [
		RouterModule.forChild(contentPage.subRoutes()),
	],
	exports: [
		RouterModule,
	],
})
export class ContentRoutingModule {}
