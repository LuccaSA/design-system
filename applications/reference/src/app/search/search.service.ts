import { Injectable } from '@angular/core';
import { ThemeDocumentationService, InterfaceDocumentationService, ClassDocumentationService, ModuleDocumentationService } from '@prisme/common';
import { ReferencePage, IReferencePage } from './reference.page';

@Injectable()
export class SearchService {
	constructor(
		protected themeService: ThemeDocumentationService,
		protected interfaceService: InterfaceDocumentationService,
		protected classService: ClassDocumentationService,
		protected moduleService: ModuleDocumentationService,
		) {}
	getPages(): IReferencePage[] {
		const themePages = this.themeService.all().map(t => new ReferencePage(t));
		const interfacePages = this.interfaceService.all().map(i => new ReferencePage(i));
		const classPages = this.classService.all().map(i => new ReferencePage(i));
		const modulePages = this.moduleService.all().map(i => new ReferencePage(i));
		return [ ...themePages, ...interfacePages, ...classPages, ...modulePages]
		.sort((a, b) => (a.documentation.name.toLowerCase() < b.documentation.name.toLowerCase()) ? -1 : 1);
	}
}
