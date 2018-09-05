import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'ds-nav-side-group',
	templateUrl: './nav-side-group.component.html',
	styleUrls: ['./nav-side-group.component.scss']
})
export class NavSideGroupComponent implements OnInit {

	@Input() page: any;

	public expanded: boolean;
	title: string;

	constructor(public router: Router) {
		router.events.subscribe(() => this.updateToggle());
	}

	ngOnInit() {
		this.title = this.page.groupPage.title;
		this.updateToggle();
	}

	public toggleMenu() {
		this.expanded = !this.expanded;
	}

	updateToggle() {
		this.expanded = this.expanded ? this.expanded : this.router.url.split('/').includes(this.page.groupPage.path);
	}

}
