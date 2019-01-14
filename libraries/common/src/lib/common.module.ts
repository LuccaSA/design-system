import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { MarkdownModule } from './markdown/index';
import { AssetModule } from './asset/index';
import { EnvironmentModule } from './environment/index';
import { PageModule } from './page/index';

@NgModule({
	imports: [
		NgCommonModule,
		AssetModule,
		EnvironmentModule,
		MarkdownModule,
		PageModule,
	],
	exports: [
		NgCommonModule,
		AssetModule,
		EnvironmentModule,
		MarkdownModule,
		PageModule,
	],
})
export class CommonModule {}
