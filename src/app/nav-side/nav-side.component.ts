import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pages } from '../commons/page/page.model';

@Component({
	selector: 'ds-nav-side',
	templateUrl: './nav-side.component.html',
	styleUrls: ['./nav-side.component.scss']
})
export class NavSideComponent implements OnInit {
	public pages: Pages;
	constructor(route: ActivatedRoute) {
		this.pages = route.snapshot.data['pages'].toNav();
	}

	ngOnInit() {
	}

}
