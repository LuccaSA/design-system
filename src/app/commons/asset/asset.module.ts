import { NgModule } from '@angular/core';
import { DsAssetService } from './asset.service';
import { DsAssetSrcDirective } from './asset-src.directive';
import { MarkdownModule } from 'ngx-markdown';
import { DsAssetMarkdownDirective } from './asset-markdown.directive';

@NgModule({
	imports: [
		MarkdownModule,
	],
	declarations: [
		DsAssetSrcDirective,
		DsAssetMarkdownDirective,
	],
	exports: [
		DsAssetSrcDirective,
		DsAssetMarkdownDirective,
	],
	providers: [
		DsAssetService,
	],
})
export class DsAssetModule {}
