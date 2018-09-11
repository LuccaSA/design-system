import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsCommonsModule } from '../commons';
import { RouterModule } from '@angular/router';
import { DsApplicationsModule } from './applications/applications.module';
import { DsGraphicAssetsModule } from './graphic-assets/graphic-assets.module';
import { DsColorsModule } from './colors/colors.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsApplicationsModule,
		DsGraphicAssetsModule,
		DsColorsModule
	],
})
export class DsRessourcesModule { }
