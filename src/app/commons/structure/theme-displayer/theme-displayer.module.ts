import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsThemeDisplayerComponent } from './theme-displayer.component';
import { DsDocApiModule } from '../../doc-api';

@NgModule({
	imports: [
		CommonModule,
		DsDocApiModule
	],
	declarations: [
		DsThemeDisplayerComponent
	],
	exports: [
		DsThemeDisplayerComponent
	],
})
export class DsThemeDisplayerModule {}
