import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Page } from '../commons/page/page.model';
import { searchabelIndex } from '../app.router';
import { Router } from '@angular/router';

@Component({
	selector: 'ds-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
	pages: Page[] = searchabelIndex;
	currentPage: Page;
	constructor(public router: Router, private cd: ChangeDetectorRef) {
		router.events.subscribe(() => this.updateInput());
	}

	ngOnInit(): void {
		this.cd.detectChanges();
	}
	searchFn(page: Page, clue: string): boolean {
		return page.match(clue);
	}
	goToPage(page: Page) {
		this.router.navigateByUrl(page.fullPath);
	}

	updateInput() {
		const path = this.router.url;
		const selectedPage = this.pages.filter(page => path === `/${page.fullPath}`);
		if (selectedPage.length === 1) {
			this.currentPage = selectedPage[0];
		}
	}
}
