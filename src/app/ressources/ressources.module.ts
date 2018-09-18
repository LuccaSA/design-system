import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsCommonsModule } from '../commons';
import { RouterModule } from '@angular/router';
import { DsApplicationsModule } from './applications/applications.module';
import { DsAssetsModule } from './assets/assets.module';
import { DsColorsModule } from './colors/colors.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsApplicationsModule,
		DsAssetsModule,
		DsColorsModule
	],
})
export class DsRessourcesModule { }
