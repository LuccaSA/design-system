import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogosComponent } from './logos/logos.component';
import { ColorsComponent } from './colors/colors.component';
import { IllustrateComponent } from './illustrate/illustrate.component';
import { TypographyComponent } from './typography/typography.component';
import { DsCommonsModule } from '../commons/commons.module';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		DsCommonsModule,
		RouterModule
	],
	declarations: [
		ColorsComponent,
		IllustrateComponent,
		LogosComponent,
		TypographyComponent
	],
	entryComponents: [
		ColorsComponent,
		IllustrateComponent,
		LogosComponent,
		TypographyComponent
	]
})
export class DsVisualModule { }
