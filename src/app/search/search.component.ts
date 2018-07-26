import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Page } from '../commons/page/page.model';
import { searchabelIndex } from '../app.router';

@Component({
	selector: 'ds-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

	private clue$: Subject<string> = new Subject<string>();
	_clue = '';
	constructor() {
		this.clue$
		.debounceTime(100) // wait 100ms after the last event before emitting last event
		.distinctUntilChanged() // only emit if value is different from previous value
		.subscribe( model => {
			this._clue = model;
			const results = this.filter(this._clue, searchabelIndex);
			console.log(results);
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
