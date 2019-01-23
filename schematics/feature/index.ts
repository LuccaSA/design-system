import { strings } from '@angular-devkit/core';
import {
	Rule,
	SchematicContext,
	Tree,
	apply,
	url,
	template,
	move,
	chain,
	branchAndMerge,
	mergeWith,
	schematic,
} from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { parseName } from '@schematics/angular/utility/parse-name';
import { findModuleFromOptions } from '@schematics/angular/utility/find-module';
import { IFeatureOptions } from './schema';
import { addComponentDeclarationToModule, updateIndex } from '../utils/file-manipulation';

export default function example(options: IFeatureOptions): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		const initialoptions = { ...options };
		const workspace = getWorkspace(tree);
		if (!options.project) {
			options.project = workspace.defaultProject || Object.keys(workspace.projects)[0];
		}
		const project = workspace.projects[options.project];
		options.prefix = project.prefix;
		if (options.path === undefined) {
			const projectDirName = project.projectType === 'application' ? 'app' : 'lib';
			options.path = `/${project.root}/src/${projectDirName}`;
		}


		if (options.guidelines) {
			const parsedGuidelinesPath = parseName('', options.name);
			options.guidelines = `guidelines${parsedGuidelinesPath.path}/${strings.dasherize(parsedGuidelinesPath.name)}/${strings.dasherize(parsedGuidelinesPath.name)}.guidelines.md`;
		}
		const parsedPath = parseName(options.path, options.name);
		options.name = parsedPath.name;
		options.path = `${parsedPath.path}/${parsedPath.name}`;
		options.module = `${parsedPath.path}/${parsedPath.name}/${parsedPath.name}.module.ts`;
		const templateSource = apply(url('./files'), [
			template({
				...strings,
				...options,
			}),
			move(options.path),
		]);
		const preliminarySchems = [
			schematic('index', initialoptions),
			schematic('module', initialoptions),
		];
		if (options.guidelines) {
			preliminarySchems.push(schematic('guidelines', initialoptions));
		}
		const rule = chain([
			branchAndMerge(
				chain([
					...preliminarySchems,
					mergeWith(templateSource),
				])
			),
			updateIndex(options, 'page'),
			addComponentDeclarationToModule(options, 'feature'),
		]);
		return rule(tree, _context);
	};
}
