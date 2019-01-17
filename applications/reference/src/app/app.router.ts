import { Routes } from '@angular/router';
import { ThemeModule } from './theme/index';
import { InterfaceModule } from './interface/index';

export const appRoutes: Routes = [
	{ path: 'theme', loadChildren: () => ThemeModule },
	{ path: 'interface', loadChildren: () => InterfaceModule }
] as Routes;
