import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { visualPages } from './visual';
// import { principlesPages } from './principles';
// import { contentPages } from './content';
import { componentsPage } from './components';
import { MainComponent } from './main/main.component';
import { IPage, pagesToIndex } from './commons';

const router = [
	// ...visualPages.toRoutes(),
	componentsPage.toRoute(),
	// ...principlesPages.toRoutes(),
	// ...contentPages.toRoutes()
];
export const searchabelIndex: IPage[] = pagesToIndex([
	// ...visualPages.toIndex(),
	componentsPage,
	// ...principlesPages.toIndex(),
	// ...contentPages.toIndex()
]);

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', component: MainComponent, children: router},
	{ path: '**', component: HomeComponent }
] as Routes;
