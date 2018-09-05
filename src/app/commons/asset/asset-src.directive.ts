import { Directive, Input, HostBinding } from '@angular/core';
import { DsAssetService } from './asset.service';

@Directive({
	selector: '[dsAssetSrc]',
})
export class DsAssetSrcDirective {
	@Input('dsAssetSrc') unprefixedSrc: string;
	@HostBinding('src') get src() {
		return this._assetService.getHref({ href: this.unprefixedSrc });
	}
	constructor(
		protected _assetService: DsAssetService,
	) {}
}
