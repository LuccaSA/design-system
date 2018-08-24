export enum ThemePropertyType {
	COLOR,
	VAR
}

export interface IThemeProperty {
	name: string;
	path?: string;
	value?: string;
	realValue?: string;
	type?: ThemePropertyType;
	children?: Array<IThemeProperty>;
}
