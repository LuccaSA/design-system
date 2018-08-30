import { Injectable } from '@angular/core';
import SCSS_DOCS from '@ds-api/scss';
import { IThemeProperty } from '../../models/theme.model';

@Injectable()
export class DsDocApiService {
	theme(key: string): IThemeProperty {
		if (!SCSS_DOCS.hasOwnProperty(key)) {
			return;
		}
		return SCSS_DOCS[key];
	}
}
