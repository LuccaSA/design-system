import { Routes, Route } from "@angular/router";
import { NavSideComponent } from "../nav-side/nav-side.component";

export interface IPage {
	title: string;
	keywords?: string[];
	path: string;
	fullPath: string;
	parent?: Page;
	match(clue: string): boolean;

}
export class Pages {
	constructor(
		public path: string,
		public pages: Page[],
		public defaultPage: Page
	) {}

	public toNav() {
		return this.pages.filter(page => {
			return !page.parent || !this.pages.includes(page.parent);
		}).map( page => page.toNav(this.pages));
	}

	public toRoutes(): Routes {
		const routes = this.pages.filter( page => page.component ).map(page => page.toRoute(this.pages), []);
		return [
			{ path: this.path, children: [
				{ path: '', component: NavSideComponent, data: {pages: this}, outlet: 'navSide'},
				{ path: '', redirectTo: `/${this.path}/${this.defaultPage.fullPath}`, pathMatch: 'full' },
				...routes
			]}
		];
	}
}
export class Page implements IPage {

	get fullPath(): string {
		if (!this.parent) {
			return this.path;
		}
		return `${this.parent.fullPath}/${this.path}`;
	}

	constructor(
		public path: string,
		public component: any,
		public title: string,
		public parent: Page = null,
		public keywords: string[] = [],
	) { }

	public toRoute(pages: Page[]): Route {
		return { path: this.fullPath, component: this.component };
	}

	public toNav(pages: Page[]) {
		const children = pages.filter(child => {
			return child.parent === this;
		});
		const navChildren = children.map(page => page.toNav(pages), []);
		if (navChildren.length < 1) {
			return { page: this };
		}
		return { page: this, children: navChildren };
	}

	public match(clue: string): boolean {
		const normalizedClue = this._normalizeString(clue);
		if (this._normalizeString(this.title).indexOf(normalizedClue) !== -1) {
			return true;
		}
		for (const keyword of this.keywords) {
			if (this._normalizeString(keyword).indexOf(normalizedClue) !== -1) {
				return true;
			}
		}
		return false;
	}

	private _normalizeString(str: string): string {
		return str
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase();
	}
}
