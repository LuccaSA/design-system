import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DsHeaderModule } from '../header';
import { DsNavSideModule } from './nav-side';

@NgModule({
	imports: [
		RouterModule,
		DsHeaderModule,
		DsNavSideModule
	],
	declarations: [
		MainComponent
	],
	entryComponents: [
		MainComponent
	],
})
export class DsMainModule { }
