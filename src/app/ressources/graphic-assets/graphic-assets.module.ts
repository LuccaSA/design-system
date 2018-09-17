import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { GraphicAssetsComponent } from './graphic-assets.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		DsCommonsModule
	],
	declarations: [
		GraphicAssetsComponent,
	],
	entryComponents: [
		GraphicAssetsComponent,
	]
})
export class DsGraphicAssetsModule { }
