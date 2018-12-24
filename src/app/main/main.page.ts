import { GroupPage, IPage } from '@ds/commons';
import { NavSideComponent } from './nav-side';
import { Route } from '@angular/router';
import { HeaderComponent } from '../header';
import { MainComponent } from './main.component';

export class MainGroupPage extends GroupPage implements IPage {
	constructor(
		path: string,
		title: string,
		children: IPage[] = [],
		keywords: string[] = [],
	) {
		super(path, title, children, keywords);
	}
	toRoute() {
		return {
			path: this.path,
			component: MainComponent,
		} as Route;
	}
	subRoutes() {
		return  [
				{ path: '', component: NavSideComponent, data: { pages: this.children }, outlet: 'navSide'},
				{ path: '', component: HeaderComponent, data: { pages: this.children }, outlet: 'header'},
				...this.children.map(c => c.toRoute())
			] as Route[];
	}
}
