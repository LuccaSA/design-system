import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import { appRoutes } from './app.router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(router: Router) {
		router.resetConfig(appRoutes);
	}
	title = 'app';
}
