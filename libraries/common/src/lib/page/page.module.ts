import { NgModule } from '@angular/core';
import { PageItemModule } from './option/index';

@NgModule({
	imports: [
		PageItemModule,
	],
	exports: [
		PageItemModule,
	],
})
export class PageModule { }
