import { ChangeDetectionStrategy, Component, Output, HostListener, Input, EventEmitter, forwardRef } from '@angular/core';
import { ILuOptionItem, ALuOptionItem } from '@lucca-front/ng';
import { IPage } from '../page.model';

@Component({
	selector: 'ds-page-item',
	templateUrl: './page-item.component.html',
	styleUrls: ['./page-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: ALuOptionItem,
			useExisting: forwardRef(() => DsPageItemComponent),
			multi: true,
		},
	],
})
export class DsPageItemComponent extends ALuOptionItem<IPage> implements ILuOptionItem<IPage> {
	_breadcrumbs: IPage[] = [];
	protected _page: IPage;
	@Input() set page(page: IPage) {
		this._breadcrumbs = page.breadcrumbs;
		this._page = page;
	}
	get page() { return this._page; }
	@Output() onSelect = new EventEmitter<IPage>();
	get value() { return this.page; }
	@HostListener('click')
	onclick() {
		this.onSelect.emit(this.page);
	}
}
