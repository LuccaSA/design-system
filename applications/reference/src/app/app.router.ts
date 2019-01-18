import { Routes } from '@angular/router';
import { ThemeModule } from './theme/index';
import { InterfaceModule } from './interface/index';
import { ClassModule } from './class/index';

export const appRoutes: Routes = [
	{ path: 'theme', loadChildren: () => ThemeModule },
	{ path: 'interface', loadChildren: () => InterfaceModule },
	{ path: 'class', loadChildren: () => ClassModule }
] as Routes;
