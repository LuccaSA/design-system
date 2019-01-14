import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ApplicationsModule } from './applications/applications.module';
import { AssetsModule } from './assets/assets.module';
import { ColorsModule } from './colors/colors.module';
import { ResourcesRoutingModule } from './resources.router';
import { MainModule } from '../main';

@NgModule({
	imports: [
		CommonModule,
		ApplicationsModule,
		AssetsModule,
		ColorsModule,
		ResourcesRoutingModule,
		MainModule,
	],
})
export class RessourcesModule { }
