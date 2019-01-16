function normalizeStr(str: string) {
	return str
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g, '')
	.toLowerCase();
}
function match(str1, str2) {
	return normalizeStr(str1).indexOf(normalizeStr(str2)) >= 0;
}
export enum ReferenceType {
	theme = 'theme',
}
export interface IReferencePage {
	type: ReferenceType;
	name: string;
	href: string;
	match(clue: string): boolean;
}
export abstract class AReferencePage implements IReferencePage {
	type: ReferenceType;
	name: string;
	href: string;
	match(clue: string) {
		return match(this.name, clue);
	}
}
export class ThemePage extends AReferencePage {
	type = ReferenceType.theme;
	get href() { return `/theme#${this.name}`; }
	constructor(name: string) {
		super();
		this.name = name;
	}
}
