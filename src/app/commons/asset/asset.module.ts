import { NgModule } from '@angular/core';
import { DsAssetService } from './asset.service';
import { DsImageAssetDirective } from './img-asset.directive';

@NgModule({
	imports: [],
	declarations: [
		DsImageAssetDirective,
	],
	exports: [
		DsImageAssetDirective,
	],
	providers: [
		DsAssetService,
	],
})
export class DsAssetModule {}
