import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IReferencePage } from './reference.page';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
	selector: 'pri-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
	pages: IReferencePage[];
	currentPage: IReferencePage;
	constructor(
		private router: Router,
		private searchService: SearchService,
		private cd: ChangeDetectorRef,
	) {}

	ngOnInit(): void {
		this.pages = this.searchService.getPages();
		this.cd.detectChanges();
	}
	searchFn(page: IReferencePage, clue: string): boolean {
		return page.match(clue);
	}
	goToPage(page: IReferencePage) {
		this.router.navigateByUrl(page.href);
	}
}
