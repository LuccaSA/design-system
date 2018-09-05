import { NgModule } from '@angular/core';
import { DsAssetService } from './asset.service';
import { DsAssetSrcDirective } from './asset-src.directive';

@NgModule({
	imports: [
	],
	declarations: [
		DsAssetSrcDirective,
	],
	exports: [
		DsAssetSrcDirective,
	],
	providers: [
		DsAssetService,
	],
})
export class DsAssetModule {}
