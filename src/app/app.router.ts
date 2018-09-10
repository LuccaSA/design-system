import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ressourcesPages } from './ressources';
import { principlesPages } from './principles';
import { contentPages } from './content';
import { componentsPages } from './components';
import { MainComponent } from './main/main.component';
import { Page } from './commons/page/page.model';

const router = [
	...ressourcesPages.toRoutes(),
	...componentsPages.toRoutes(),
	...principlesPages.toRoutes(),
	...contentPages.toRoutes()
];
export const searchabelIndex: Page[] = [
	...ressourcesPages.toIndex(),
	...componentsPages.toIndex(),
	...principlesPages.toIndex(),
	...contentPages.toIndex()
];

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', component: MainComponent, children: router},
	{ path: '**', component: HomeComponent }
] as Routes;
