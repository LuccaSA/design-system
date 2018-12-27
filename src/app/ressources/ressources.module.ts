import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { DsApplicationsModule } from './applications/applications.module';
import { DsAssetsModule } from './assets/assets.module';
import { DsColorsModule } from './colors/colors.module';
import { DsResourcesRoutingModule } from './resources.router';
import { DsMainModule } from 'app/main';

@NgModule({
	imports: [
		DsCommonsModule,
		DsApplicationsModule,
		DsAssetsModule,
		DsColorsModule,
		DsResourcesRoutingModule,
		DsMainModule,
	],
})
export class DsRessourcesModule { }
