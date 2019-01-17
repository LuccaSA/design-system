import { Injectable } from '@angular/core';
import NG_DOCS from '@prisme/documentation/ng';
import { IInterfaceDocumentation } from './interface.model';

@Injectable()
export class InterfaceDocumentationService {
	get(key: string): IInterfaceDocumentation {
		if (!NG_DOCS.hasOwnProperty(key)) {
			return;
		}
		return NG_DOCS[key];
	}
	// allThemes(): string[] {
	// 	return Object.keys(NG_DOCS);
	// }
}
