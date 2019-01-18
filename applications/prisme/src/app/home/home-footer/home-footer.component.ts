import { Component } from '@angular/core';
import { ITool } from '@prisme/common';

@Component({
	selector: 'pri-home-footer',
	templateUrl: './home-footer.component.html'
})
export class HomeFooterComponent {
	figma = {
		title: 'Une maquette a faire ?',
		description: 'Utilisez notre librairie figma',
		link: '#',
		href: 'assets/figma.png',
	} as ITool;
	github = {
		title: `Besoin d'une évolution ?`,
		description: 'Contribuez sur GitHub',
		link: 'https://github.com/LuccaSA/lucca-front',
		href: 'assets/github.png',
	} as ITool;
}
