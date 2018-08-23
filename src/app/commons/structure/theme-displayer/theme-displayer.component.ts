import { Component, OnInit, Input } from '@angular/core';
import { IThemeProperty } from '../../../models/theme.model';

@Component({
	selector: 'ds-theme-displayer',
	templateUrl: './theme-displayer.component.html',
	styleUrls: ['./theme-displayer.component.scss']
})
export class DsThemeDisplayerComponent implements OnInit {
	@Input() theme: IThemeProperty[];
	get flatTheme(): IThemeProperty[] {
		return [].concat(...this.theme.map(
			(acc: IThemeProperty) => this.flattenChildren(acc)));
	}
	constructor() { }

	ngOnInit(): void {}

	private flattenChildren(prop: IThemeProperty, parentName: string = ''): IThemeProperty[] {
		if (!prop.children) {
			return [prop];
		}
		const result: IThemeProperty[] = [];
		for (let p of prop.children) {
			if (p.children) {
				const prefix = parentName !== '' ? parentName + '.' + prop.name : prop.name;
				result.push(...this.flattenChildren(p, prefix));
			} else {
				result.push({
					name: `${parentName !== '' ? parentName + '.' : ''}${prop.name}.${p.name}`,
					value: p.value
				});
			}
		}
		return result;
	}
}
