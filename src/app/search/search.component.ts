import { Component, OnInit, ViewChild } from '@angular/core';
import { LuPopoverTrigger } from '@lucca-front/ng';
import { Subject } from 'rxjs';
import { Page } from '../commons/page/page.model';
import { searchabelIndex } from '../app.router';

@Component({
	selector: 'ds-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
	@ViewChild(LuPopoverTrigger) searchInput: LuPopoverTrigger;
	private clue$: Subject<string> = new Subject<string>();
	_clue = '';
	public results = [];
	constructor() {
		this.clue$
		.debounceTime(300) // wait 100ms after the last event before emitting last event
		.distinctUntilChanged() // only emit if value is different from previous value
		.subscribe( model => {
			this._clue = model;
			if (this._clue.length < 3) {
				this.searchInput.closePopover();
				return;
			}
			this.results = this.filter(this._clue, searchabelIndex);
			if (this.results.length < 1) {
				this.searchInput.closePopover();
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

}
