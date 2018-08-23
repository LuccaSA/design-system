export interface IThemeProperty {
	name: string;
	path?: string;
	notes?: string;
	value?: string;
	children?: Array<IThemeProperty>;
}
