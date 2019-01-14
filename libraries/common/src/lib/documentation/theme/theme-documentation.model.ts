export enum ThemeDocumentationType {
	COLOR,
	VAR
}

export interface IThemeDocumentation {
	name: string;
	path?: string;
	value?: string;
	realValue?: string;
	type?: ThemeDocumentationType;
	children?: Array<IThemeDocumentation>;
}
