import {
	Rule,
	SchematicContext,
	Tree,
	chain,
	schematic,
} from '@angular-devkit/schematics';
import { IModuleOptions } from './schema';

export default function fullPage(options: IModuleOptions): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const rule = chain([
			schematic('index', options),
			schematic('module', options),
		]);
		return rule(tree, _context);
	};
}
