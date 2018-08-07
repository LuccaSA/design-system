import { Component, OnInit, ViewChild } from '@angular/core';
import { LuPopoverTriggerDirective } from '@lucca-front/ng';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Page } from '../commons/page/page.model';
import { searchabelIndex } from '../app.router';

@Component({
	selector: 'ds-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
	@ViewChild(LuPopoverTriggerDirective) searchInput: LuPopoverTriggerDirective;
	private clue$: Subject<string> = new Subject<string>();
	_clue = '';
	public results = [];
	constructor() {
		this.clue$.pipe(
			// wait 100ms after the last event before emitting last event
			debounceTime(300),
			// only emit if value is different from previous value
			distinctUntilChanged()
		)
		.subscribe( model => {
			this._clue = model;
			if (this._clue.length < 3) {
				this.closePopover();
				return;
			}
			this.results = this.filter(this._clue, searchabelIndex);
			if (this.results.length < 1) {
				this.closePopover();
				return;
			}
			if (!this.searchInput.popoverOpen) {
				this.searchInput.openPopover();
			}
		});
	}

	ngOnInit() {
	}

	private filter(clue: string, index: Page[]): Page[] {
		return index.filter(page => page.match(clue));
	}

	public onFieldChange(clue: string) {
		this.clue$.next(clue);
	}

	public onFocus() {
		if (this.results.length > 0 ) {
			this.searchInput.openPopover();
		}
	}

	public onBlur(event: FocusEvent) {
		if (event.relatedTarget) {
			return;
		}
		this.closePopover();
	}

	public closePopover() {
		this.searchInput.closePopover();
	}

}
