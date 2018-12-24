import {
	Rule,
	SchematicContext,
	Tree,
	chain,
	schematic,
} from '@angular-devkit/schematics';
import { IPageOptions } from './schema';

export default function fullPage(options: IPageOptions): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const rule = chain([
			schematic('index', options),
			schematic('page', options),
		]);
		return rule(tree, _context);
	};
}
