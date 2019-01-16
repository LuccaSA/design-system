import { Injectable } from '@angular/core';
import { ThemeDocumentationService } from '@prisme/common';

@Injectable()
export class SearchService {
	constructor(protected themeService: ThemeDocumentationService) {}
	getPages() {
		return this.themeService.allThemes();
	}
}
