import { Injectable } from '@angular/core';
import SCSS_DOCS from '@prisme/documentation/scss';
import { IThemeDocumentation } from './theme-documentation.model';

@Injectable()
export class ThemeDocumentationService {
	theme(key: string): IThemeDocumentation {
		if (!SCSS_DOCS.hasOwnProperty(key)) {
			return;
		}
		return SCSS_DOCS[key];
	}
}
