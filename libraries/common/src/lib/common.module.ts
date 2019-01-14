import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { MarkdownModule } from './markdown/index';
import { AssetModule } from './asset/index';
import { EnvironmentModule } from './environment/index';
import { FeatureModule } from './feature/index';
import { PageModule } from './page/index';

@NgModule({
	imports: [
		NgCommonModule,
		AssetModule,
		EnvironmentModule,
		FeatureModule,
		MarkdownModule,
		PageModule,
	],
	exports: [
		NgCommonModule,
		AssetModule,
		EnvironmentModule,
		FeatureModule,
		MarkdownModule,
		PageModule,
	],
})
export class CommonModule {}
