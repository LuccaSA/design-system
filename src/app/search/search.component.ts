import { Component } from '@angular/core';
import { Page } from '../commons/page/page.model';
import { searchabelIndex } from '../app.router';
import { Router } from '@angular/router';

@Component({
	selector: 'ds-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
	pages: Page[] = searchabelIndex;
	currentPage: Page;
	constructor(protected router: Router) {}
	searchFn(page: Page, clue: string): boolean {
		return page.match(clue);
	}
	goToPage(page: Page) {
		this.router.navigateByUrl(page.fullPath);
	}
}
