import { Injectable } from '@angular/core';
import { ThemeDocumentationService } from '@prisme/common';
import { ThemePage, IReferencePage } from './reference.page';

@Injectable()
export class SearchService {
	constructor(protected themeService: ThemeDocumentationService) {}
	getPages(): IReferencePage[] {
		return this.themeService.allThemes().map(t => new ThemePage(t));
	}
}
