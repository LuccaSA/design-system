import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { visualRouter } from './visual';
import { principlesRouter } from './principles';
import { contentRouter } from './content';
import { componentsRouter } from './components';
import { MainComponent } from './commons/main/main.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: MainComponent, children: [
    // ...principlesRouter,
    // ...contentRouter,
    ...visualRouter,
    ...componentsRouter
  ]},
  { path: '**', component: HomeComponent }
] as Routes;
