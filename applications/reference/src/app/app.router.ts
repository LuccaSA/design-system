import { Routes } from '@angular/router';
import { ThemeModule } from './theme';

export const appRoutes: Routes = [
	{ path: 'theme', loadChildren: () => ThemeModule },
] as Routes;
