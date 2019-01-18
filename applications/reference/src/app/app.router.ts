import { Routes } from '@angular/router';
import { ThemeModule } from './theme/index';
import { InterfaceModule } from './interface/index';
import { ClassModule } from './class/index';
import { ModuleModule } from './module/index';

export const appRoutes: Routes = [
	{ path: 'theme', loadChildren: () => ThemeModule },
	{ path: 'interface', loadChildren: () => InterfaceModule },
	{ path: 'module', loadChildren: () => ModuleModule },
	{ path: 'class', loadChildren: () => ClassModule }
] as Routes;
