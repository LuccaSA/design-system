import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ressourcesPage } from './ressources';
import { principlesPage } from './principles';
// import { contentPages } from './content';
import { componentsPage } from './components';
import { MainComponent } from './main/main.component';
import { IPage } from '@ds/commons';
import { contentPage } from './content';

const router = [
	ressourcesPage.toRoute(),
	componentsPage.toRoute(),
	// contentPage.toRoute(),
	principlesPage.toRoute(),
];
export const searchabelIndex: IPage[] = [
	...ressourcesPage.toIndex(),
	...componentsPage.toIndex(),
	...principlesPage.toIndex(),
	// ...contentPage.toIndex()
];

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', component: MainComponent, children: router},
	{ path: '**', component: HomeComponent }
] as Routes;
