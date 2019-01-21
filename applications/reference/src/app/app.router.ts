import { Routes } from '@angular/router';
import { ThemeModule } from './theme/index';
import { InterfaceModule } from './interface/index';
import { ClassModule } from './class/index';
import { ModuleModule } from './module/index';
import { InjectableModule } from './injectable/index';
import { PipeModule } from './pipe/index';

export const appRoutes: Routes = [
	{ path: 'theme', loadChildren: () => ThemeModule },
	{ path: 'interface', loadChildren: () => InterfaceModule },
	{ path: 'module', loadChildren: () => ModuleModule },
	{ path: 'injectable', loadChildren: () => InjectableModule },
	{ path: 'pipe', loadChildren: () => PipeModule },
	{ path: 'class', loadChildren: () => ClassModule }
] as Routes;
