import { Directive, Input, OnInit } from '@angular/core';
import { DsAssetService } from '../asset';
import { MarkdownComponent } from 'ngx-markdown';

@Directive({
	selector: 'markdown[dsMarkdownSrc]',
})
export class DsMarkdownSrcDirective implements OnInit {
	@Input('dsMarkdownSrc') unprefixedSrc: string;
	constructor(
		protected _assetService: DsAssetService,
		protected _markdownComponent: MarkdownComponent,
	) {}
	ngOnInit() {
		this._markdownComponent.src = this._assetService.getHref({ href: this.unprefixedSrc });
	}
}
