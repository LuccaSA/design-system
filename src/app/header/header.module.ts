import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { DsSearchModule } from '../search';

@NgModule({
	imports: [
		DsSearchModule,
		RouterModule
	],
	declarations: [
		HeaderComponent
	],
	exports: [
		HeaderComponent
	]
})
export class DsHeaderModule { }
