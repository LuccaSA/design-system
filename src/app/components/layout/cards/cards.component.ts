import { Component, OnInit } from '@angular/core';
import { IThemeProperty } from '../../../models/theme.model';
import SCSS_DOCS from './scss-theme-docs';

@Component({
	selector: 'ds-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
	theme: Array<IThemeProperty> = [
		{
			name: 'test',
			value: '20%'
		},
		{
			name: 'content',
			children: [
				{
					name: 'padding',
					value: '1.5rem'
				},
				{
					name: 'cool',
					children: [
						{
							name: 'padding',
							value: '1.5rem'
						},
						{
							name: 'padding',
							children: [
								{
									name: 'border-radius',
									value: '3px'
								}
							]
						}
					]
				}
			]
		},
		{
			name: 'footer',
			children: [
				{
					name: 'padding',
					value: '.33rem 1.5rem'
				}
			]
		}
	];

	constructor() {
		console.log(SCSS_DOCS["card"]);
	}

	ngOnInit() {
	}

}
