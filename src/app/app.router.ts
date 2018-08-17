import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { visualPages } from './visual';
import { principlesPages } from './principles';
import { contentPages } from './content';
import { componentsPages } from './components';
import { MainComponent } from './main/main.component';
import { Page } from './commons/page/page.model';

const router = [
	...visualPages.toRoutes(),
	...componentsPages.toRoutes(),
	...principlesPages.toRoutes(),
	...contentPages.toRoutes()
];
export const searchabelIndex: Page[] = [
	...visualPages.toIndex(),
	...componentsPages.toIndex(),
	...principlesPages.toIndex(),
	...contentPages.toIndex()
];

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', component: MainComponent, children: router},
	{ path: '**', component: HomeComponent }
] as Routes;
