import { NgModule } from '@angular/core';

import { DsToolModule } from './tool';
import { DsSafeContentModule } from './safe-content';
import { DsPageItemModule } from './page';
import { DsCodeTabsModule } from './code-tabs';
import { DsDocApiModule } from './doc-api';
import { DsStructureModule } from './structure';
import { DsAssetModule } from './asset';
import { DsMarkdownModule } from './markdown';

@NgModule({
	imports: [
		DsPageItemModule,
		DsCodeTabsModule,
		DsStructureModule,
		DsDocApiModule,
		DsToolModule,
		DsSafeContentModule,
		DsAssetModule,
		DsMarkdownModule,
	],
	exports: [
		DsPageItemModule,
		DsCodeTabsModule,
		DsStructureModule,
		DsDocApiModule,
		DsToolModule,
		DsSafeContentModule,
		DsAssetModule,
		DsMarkdownModule,
	],
})
export class DsCommonsModule { }
