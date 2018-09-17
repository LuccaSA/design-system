import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ressourcesPages } from './ressources';
// import { principlesPages } from './principles';
// import { contentPages } from './content';
import { componentsPage } from './components';
import { MainComponent } from './main/main.component';
import { IPage } from './commons';

const router = [
	// ...ressourcesPages.toRoutes(),
	componentsPage.toRoute(),
	// ...principlesPages.toRoutes(),
	// ...contentPages.toRoutes()
];
export const searchabelIndex: IPage[] = [
	// ...ressourcesPages.toIndex(),
	...componentsPage.toIndex(),
	// ...principlesPages.toIndex(),
	// ...contentPages.toIndex()
];

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', component: MainComponent, children: router},
	{ path: '**', component: HomeComponent }
] as Routes;
