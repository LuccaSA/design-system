import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ressourcesPage, RessourcesModule } from './ressources';
import { principlesPage, PrinciplesModule } from './principles';
import { contentPage, ContentModule } from './content';
import { componentsPage, ComponentsModule } from './components';
import { IPage } from '@prisme/common';

const routes = [
	{ ...ressourcesPage.toRoute(), loadChildren: () => RessourcesModule },
	{ ...componentsPage.toRoute(), loadChildren: () => ComponentsModule },
	{ ...contentPage.toRoute(), loadChildren: () => ContentModule },
	{ ...principlesPage.toRoute(), loadChildren: () => PrinciplesModule },
];
export const searchableIndex: IPage[] = [
	...componentsPage.toIndex(),
	...contentPage.toIndex(),
	...principlesPage.toIndex(),
	...ressourcesPage.toIndex(),
];

export const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	...routes,
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }
] as Routes;
