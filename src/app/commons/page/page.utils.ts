import { IPage } from './page.model';

export function pagesToIndex(pages: IPage[]): IPage[] {
	return pages
		.map(p => [p, ...pagesToIndex(p.children)])
		.reduce((acc, current) => [...acc, ...current]);
}
