import { IDocumentation, DocumentationType } from '@prisme/common';

function normalizeStr(str: string) {
	return str
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g, '')
	.toLowerCase();
}
function match(str1, str2) {
	return normalizeStr(str1).indexOf(normalizeStr(str2)) >= 0;
}
export interface IReferencePage extends IDocumentation {
	href: string;
	match(clue: string): boolean;
}
export class ReferencePage implements IReferencePage {
	name: string;
	type: DocumentationType;
	get href() { return `/${this.type}#${this.name}`; }
	constructor(public documentation: IDocumentation) {
		this.name = documentation.name;
		this.type = documentation.type;
	}
	match(clue: string) {
		return match(this.documentation.name, clue);
	}
}