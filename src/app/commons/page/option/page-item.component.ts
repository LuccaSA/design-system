import { ChangeDetectionStrategy, Component, Output, HostListener, Input, EventEmitter, forwardRef } from '@angular/core';
import { ILuOptionItem, ALuOptionItem } from '@lucca-front/ng';
import { Page } from '../page.model';

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
export class DsPageItemComponent<T = Page> extends ALuOptionItem<T> implements ILuOptionItem<T> {
	@Input() page: T;
	@Output() onSelect = new EventEmitter<T>();
	get value() { return this.page; }
	@HostListener('click')
	onclick() {
		this.onSelect.emit(this.page);
	}
}
