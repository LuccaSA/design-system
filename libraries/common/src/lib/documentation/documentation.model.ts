export interface IDocumentation {
	name: string;
	description?: string;
	type?: DocumentationType;
}

export enum DocumentationType {
	class = 'class',
	component = 'component',
	directive = 'directive',
	injectable = 'injectable',
	interface = 'interface',
	module = 'module',
	pipe = 'pipe',
	theme = 'theme',
}
