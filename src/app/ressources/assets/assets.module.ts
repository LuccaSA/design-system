import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { AssetsComponent } from './assets.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		DsCommonsModule
	],
	declarations: [
		AssetsComponent,
	],
	entryComponents: [
		AssetsComponent,
	]
})
export class DsAssetsModule { }
