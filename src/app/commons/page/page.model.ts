import { Routes, Route } from '@angular/router';
import { NavSideComponent } from "../../nav-side/nav-side.component";

export interface IPage {
	title: string;
	path: string;
	fullPath: string;
	keywords?: string[];
	parent?: IPage;
	children?: IPage[];
	breadcrumbs: IPage[];
	match(clue: string): boolean;
	toRoute(): Route;
}
function normalizeStr(str: string) {
	return str
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g, '')
	.toLowerCase();
}
function match(str1, str2) {
	return normalizeStr(str1).indexOf(normalizeStr(str2)) >= 0;
}
export abstract class APage implements IPage {
	get fullPath() {
		return !!this.parent ? `${this.parent.fullPath}/${this.path}` : this.path;
	}
	get breadcrumbs() {
		return !!this.parent ? [ ...this.parent.breadcrumbs, this] : [this];
	}
	protected _children: IPage[] = [];
	get children() {
		return this._children;
	}
	set children(children: IPage[]) {
		// unlink old children
		this._children.forEach(c => c.parent = null);
		this._children = children;
		// set this as parent for each child
		this._children.forEach(c => c.parent = this as IPage);
	}
	protected _parent: IPage;
	get parent() { return this._parent; }
	set parent(parent: IPage) {
		this._parent = parent;
	}
	constructor(
		public title: string,
		public path: string,
		public keywords: string[] = [],
	) {}
	match(clue: string): boolean {
		const titleMatch = match(this.title, clue);
		const parentMatch = !!this.parent && this.parent.match(clue);
		const keywordMatch = this.keywords
		.map(kw => match(kw, clue))
		.reduce((acc, current) => acc || current);
		return titleMatch || parentMatch || keywordMatch;
	}
	abstract toRoute();
}

export class FeaturePage extends APage implements IPage {
	component;
	constructor(
		path: string,
		title: string,
		component: any,
		keywords: string[] = [],
	) {
		super(path, title, keywords);
		this.component = component;
	}
	toRoute() {
		return { path: this.path, component: this.component } as Route;
	}
}
export class GroupPage extends APage implements IPage {
	constructor(
		path: string,
		title: string,
		children: IPage[] = [],
		keywords: string[] = [],
	) {
		super(path, title, keywords);
		this.children = children;
	}
	toRoute() {
		return { path: this.path, children: this.children.map(c => c.toRoute()) } as Route;
	}
}

// export class Pages {
// 	constructor(
// 		public path: string,
// 		public pages: IPage[],
// 		public defaultPage: Page = pages[0]
// 	) {}

// 	public toNav() {
// 		return this.pages.filter(page => {
// 			return !page.parent || !this.pages.includes(page.parent);
// 		}).map( page => page.toNav(this.pages));
// 	}

// 	public toIndex() {
// 		return this.pages.map( page => {
// 			if (!page.parent) {
// 				page.groupPath = this.path;
// 			}
// 			return page;
// 		}, [])
// 		.filter(page => page.component); // removes all "Group"
// 	}

// 	public toRoutes(): Routes {
// 		const routes = this.pages.filter( page => page.component ).map(page => page.toRoute(this.pages), []);
// 		return [
// 			{ path: this.path, children: [
// 				{ path: '', component: NavSideComponent, data: {pages: this}, outlet: 'navSide'},
// 				{ path: '', redirectTo: `/${this.path}/${this.defaultPage.fullPath}`, pathMatch: 'full' },
// 				...routes
// 			]}
// 		];
// 	}
// }
// export class Page implements IPage {
// 	public groupPath: string;
// 	public parent: IPage;
// 	get fullPath(): string {
// 		if (!this.parent) {
// 			return this.groupPath ? `${this.groupPath}/${this.path}` : this.path;
// 		}
// 		return this.breadcrumb.map(b => {
// 			return b.groupPath ? `${b.groupPath}/${b.path}` : b.path;
// 		}).join('/');
// 	}

// 	get breadcrumb(): this[] {
// 		const breadcrumbs: this[] = [];
// 		let currentPage: this = this;
// 		while (currentPage != null) {
// 			breadcrumbs.unshift(currentPage);
// 			currentPage = currentPage.parent;
// 		}
// 		return breadcrumbs;
// 	}

// 	constructor(
// 		public path: string,
// 		public component: any,
// 		public title: string,
// 		// public parent: Page = null,
// 		public keywords: string[] = [],
// 	) { }

// 	public toRoute(pages: Page[]): Route {
// 		return { path: this.fullPath, component: this.component };
// 	}

// 	public toNav(pages: Page[]) {
// 		const children = pages.filter(child => {
// 			return child.parent === this;
// 		});
// 		const navChildren = children.map(page => page.toNav(pages), []);
// 		if (navChildren.length < 1) {
// 			return { page: this };
// 		}
// 		return { groupPage: this, children: navChildren };
// 	}

// 	public match(clue: string): boolean {
// 		const normalizedClue = this._normalizeString(clue);
// 		if (this._normalizeString(this.title).indexOf(normalizedClue) !== -1) {
// 			return true;
// 		}
// 		if (this.parent && this._normalizeString(this.parent.title).indexOf(normalizedClue) !== -1) {
// 			return true;
// 		}
// 		for (const keyword of this.keywords) {
// 			if (this._normalizeString(keyword).indexOf(normalizedClue) !== -1) {
// 				return true;
// 			}
// 		}
// 		return false;
// 	}

// 	private _normalizeString(str: string): string {
// 		return str
// 			.normalize('NFD')
// 			.replace(/[\u0300-\u036f]/g, '')
// 			.toLowerCase();
// 	}
// }
