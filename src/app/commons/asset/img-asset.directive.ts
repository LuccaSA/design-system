import { Directive, Input, HostBinding } from '@angular/core';
import { IAsset } from './asset.model';
import { DsAssetService } from './asset.service';

@Directive({
	selector: 'img[dsAsset]',
})
export class DsImageAssetDirective {
	@Input('dsAsset') asset: IAsset;
	@HostBinding('src') get src() {
		return this._assetService.getHref(this.asset);
	}
	constructor(
		protected _assetService: DsAssetService,
	) {}
}
