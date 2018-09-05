import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { DsMarkdownSrcDirective } from './markdown-src.directive';
import { DsAssetModule } from '../asset';

@NgModule({
	imports: [
		MarkdownModule,
		DsAssetModule,
	],
	declarations: [
		DsMarkdownSrcDirective,
	],
	exports: [
		DsMarkdownSrcDirective,
		MarkdownModule,
	],
})
export class DsMarkdownModule {}
