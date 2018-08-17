import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DsHeaderModule } from '../header';

@NgModule({
	imports: [
		RouterModule,
		DsHeaderModule
	],
	declarations: [
		MainComponent
	],
	entryComponents: [
		MainComponent
	],
})
export class DsMainModule { }
