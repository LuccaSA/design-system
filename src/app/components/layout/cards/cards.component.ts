import { Component, OnInit } from '@angular/core';
import { IThemeProperty } from '../../../models/theme.model';

@Component({
	selector: 'ds-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

	theme: Array<IThemeProperty> = [
		{
			name: 'test',
			defaultValue: '20%'
		},
		{
			name: 'content',
			children: [
				{
					name: 'padding',
					defaultValue: '1.5rem'
				},
				{
					name: 'cool',
					children: [
						{
							name: 'padding',
							defaultValue: '1.5rem'
						},
						{
							name: 'padding',
							children: [
								{
									name: 'border-radius',
									defaultValue: '3px'
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
					defaultValue: '.33rem 1.5rem'
				}
			]
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
