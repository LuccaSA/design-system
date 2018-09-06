import { NgModule, ModuleWithProviders } from '@angular/core';
import { DsMarkdownSrcDirective } from './markdown-src.directive';
import { DsAssetModule } from '../asset';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { markedOptionsFactory } from './markdown.options';

@NgModule({
	imports: [
		HttpClientModule,
		MarkdownModule.forRoot({
			loader: HttpClient,
			markedOptions: {
				provide: MarkedOptions,
				useFactory: markedOptionsFactory
			}
		}),
	],
})
class DsMarkdownRootModule {}

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
export class DsMarkdownModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: DsMarkdownRootModule,
		};
	}
}
