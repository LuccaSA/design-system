export interface IThemeProperty {
	name: string;
	path?: string;
	notes?: string;
	defaultValue?: string;
	children?: Array<IThemeProperty>;
}
