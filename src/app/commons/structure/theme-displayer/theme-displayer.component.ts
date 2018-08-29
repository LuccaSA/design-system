import { Component, OnInit, Input } from '@angular/core';
import { IThemeProperty, ThemePropertyType } from '../../../models/theme.model';
import { DsDocApiService } from '../../services';

@Component({
	selector: 'ds-theme-displayer',
	templateUrl: './theme-displayer.component.html',
	styleUrls: ['./theme-displayer.component.scss']
})
export class DsThemeDisplayerComponent implements OnInit {
	@Input() theme: IThemeProperty;
	type: any = ThemePropertyType;
	get flatTheme(): IThemeProperty[] {
		return [].concat(...this.theme.children.map(
			(acc: IThemeProperty) => this.flattenChildren(acc)));
	}

	constructor(private docApi: DsDocApiService) {}
	ngOnInit(): void {}

	private flattenChildren(prop: IThemeProperty, parentName: string = ''): IThemeProperty[] {
		if (!prop.children) {
			return [this.processValue(prop)];
		}
		const result: IThemeProperty[] = [];
		for (let p of prop.children) {
			if (p.children) {
				const prefix = parentName !== '' ? parentName + '.' + prop.name : prop.name;
				result.push(...this.flattenChildren(p, prefix));
			} else {
				p = this.processValue(p);
				result.push({
					name: `${parentName !== '' ? parentName + '.' : ''}${prop.name}.${p.name}`,
					value: p.value,
					realValue: p.realValue,
					type: p.type
				});
			}
		}
		return result;
	}

	private processValue(property: IThemeProperty): IThemeProperty {
		if (property.value.includes('_color')) {
			return this.processColorValue(property);
		} else if (property.value.includes('_theme')) {
			return this.processThemeValue(property);
		}
		return property;
	}

	private processThemeValue(property: IThemeProperty): IThemeProperty {
		const regex = new RegExp('"(.*?)"');
		const result = regex.exec(property.value);
		const path = result[1].split('.');
		const realValue = this.findProperty(path);
		if (realValue) {
			return {
				name: property.name,
				value: property.value,
				realValue: realValue,
				type: ThemePropertyType.VAR
			};
		}
		return property;
	}

	private processColorValue(property: IThemeProperty): IThemeProperty {
		const regex = new RegExp('"(.*?)"', 'g');
		const path = ['palettes'];
		let result;
		let counter = 0;
		while ( (result = regex.exec(property.value)) !== null) {
			if (counter === 0 && result[1].startsWith('text')) {
				path[0] = 'colors';
			}
			path.push(...result[1].split('.'));
			counter++;
		}
		if (counter === 1) {
			path.push('color');
		}
		const realValue = this.findProperty(path);
		if (realValue) {
			return {
				name: property.name,
				value: property.value,
				realValue: realValue,
				type: ThemePropertyType.COLOR
			};
		}
		return property;
	}

	private findProperty(path: string[]): string {
		let node = this.docApi.theme(path[0]);
		if (!node) {
			return;
		}
		for (let i = 1; i < path.length; i++) {
			node = node.children.find(prop => prop.name.includes(path[i]));
			if (node === null || node === undefined) {
				return;
			}
		}
		return node.value;
	}

}
