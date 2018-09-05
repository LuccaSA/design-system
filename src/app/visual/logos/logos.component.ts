import { Component } from '@angular/core';
import {
	luccaLogo,
	figgoLogo,
	cleemyLogo,
	popleeLogo,
	paggaLogo,
	timmiLogo,
} from './logo.model';

@Component({
	selector: 'ds-logos',
	templateUrl: './logos.component.html',
	styleUrls: ['./logos.component.scss']
})
export class LogosComponent {
	logos = [
		luccaLogo,
		figgoLogo,
		cleemyLogo,
		popleeLogo,
		paggaLogo,
		timmiLogo,
	];
}
