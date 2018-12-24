import { Injectable } from '@angular/core';
import SCSS_DOCS from '@ds-api/scss';
import NG_DOCS from '@ds-api/ng';
import { IThemeProperty } from '../../models/theme.model';

@Injectable()
export class DsDocApiService {
	theme(key: string): IThemeProperty {
		if (!SCSS_DOCS.hasOwnProperty(key)) {
			return;
		}
		return SCSS_DOCS[key];
	}
	ng(key: string) {
		if (!NG_DOCS.hasOwnProperty(key)) {
			return;
		}
		return NG_DOCS[key];
	}
}
