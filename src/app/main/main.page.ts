import { GroupPage, IPage } from '@ds/commons';
import { NavSideComponent } from './nav-side';
import { Route } from '@angular/router';
import { HeaderComponent } from './header';

export class MainGroupPage extends GroupPage implements IPage {
	module: any;
	toRoute() {
		return {
			path: this.path,
			loadChildren: () => this.module,
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
