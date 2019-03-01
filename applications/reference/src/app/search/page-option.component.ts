import { Component, forwardRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { IReferencePage } from './reference.page';
import { ALuOptionItem } from '@lucca-front/ng';

@Component({
	selector: 'pri-page-option',
	templateUrl: './page-option.component.html',
	styleUrls: ['./page-option.component.scss'],
	providers: [
		{
			provide: ALuOptionItem,
			useExisting: forwardRef(() => PageOptionComponent),
			multi: true,
		},
	]
})
export class PageOptionComponent implements ALuOptionItem<IReferencePage> {
	protected _page: IReferencePage;
	@Input() set page(page: IReferencePage) {
		this._page = page;
	}
	get page() { return this._page; }
	@Output() onSelect = new EventEmitter<IReferencePage>();
	get value() { return this.page; }
	@HostListener('click')
	onclick() {
		this.onSelect.emit(this.page);
	}
}
