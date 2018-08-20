import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsThemeDisplayerComponent } from './theme-displayer.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		DsThemeDisplayerComponent
	],
	exports: [
		DsThemeDisplayerComponent
	],
})
export class DsThemeDisplayerModule {}
