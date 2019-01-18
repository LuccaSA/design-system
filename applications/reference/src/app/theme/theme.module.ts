import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ThemeRoutingModule } from './theme.router';
import { ThemeComponent } from './theme.component';


@NgModule({
	imports: [
		CommonModule,
		ThemeRoutingModule,
	],
	declarations: [
		ThemeComponent,
	],
})
export class ThemeModule { }
