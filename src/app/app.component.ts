import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutes } from './app.router';

@Component({
	selector: 'ds-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(router: Router) {
		router.resetConfig(appRoutes);
	}
	title = 'Lucca Design System';
}
