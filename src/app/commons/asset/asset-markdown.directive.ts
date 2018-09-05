import { Directive, Input, OnInit } from '@angular/core';
import { DsAssetService } from './asset.service';
import { MarkdownComponent } from 'ngx-markdown';

@Directive({
	selector: 'markdown[dsAssetMarkdown]',
})
export class DsAssetMarkdownDirective implements OnInit {
	@Input('dsAssetMarkdown') unprefixedSrc: string;
	constructor(
		protected _assetService: DsAssetService,
		protected _markdownComponent: MarkdownComponent,
	) {}
	ngOnInit() {
		this._markdownComponent.src = this._assetService.getHref({ href: this.unprefixedSrc });
	}
}
