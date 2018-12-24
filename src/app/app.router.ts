import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ressourcesPage, DsRessourcesModule } from './ressources';
import { principlesPage, DsPrinciplesModule } from './principles';
import { contentPage, DsContentModule } from './content';
import { componentsPage, DsComponentsModule } from './components';
import { IPage } from '@ds/commons';

const routes = [
	{ ...ressourcesPage.toRoute(), loadChildren: () => DsRessourcesModule },
	{ ...componentsPage.toRoute(), loadChildren: () => DsComponentsModule },
	{ ...contentPage.toRoute(), loadChildren: () => DsContentModule },
	{ ...principlesPage.toRoute(), loadChildren: () => DsPrinciplesModule },
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
