import {
	Rule,
	SchematicContext,
	Tree,
	chain,
	schematic,
} from '@angular-devkit/schematics';
import { IFeatureOptions } from './schema';

export default function fullFeature(options: IFeatureOptions): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const rule = chain([
			schematic('index', options),
			schematic('module', options),
			schematic('feature', options),
		]);
		return rule(tree, _context);
	};
}
