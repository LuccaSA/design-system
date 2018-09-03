import { buildRelativePath } from '@schematics/angular/utility/find-module';
import { addDeclarationToModule, addEntryComponentToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import * as ts from 'typescript';
import { Tree, SchematicsException } from '@angular-devkit/schematics';
import { ExampleOptions } from '../example/schema';
import { strings } from '@angular-devkit/core';

function readIntoSourceFile(host: Tree, modulePath: string) {
	const text = host.read(modulePath);
	if (text === null) {
		throw new SchematicsException(`File ${modulePath} does not exist.`);
	}
	const sourceText = text.toString('utf-8');
	return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}

export function addDeclarationToNgModule(options: ExampleOptions) {
	return (host: Tree) => {
		if (!options.module) {
			return host;
		}
		const modulePath = options.module;
		let source = readIntoSourceFile(host, modulePath);
		const componentPath = `/${options.path}/`
			+ strings.dasherize(options.name) + '/'
			+ strings.dasherize(options.name)
			+ '.example';
		const relativePath = buildRelativePath(modulePath, componentPath);
		const classifiedName = strings.classify(`${options.name}ExampleComponent`);
		const declarationChanges = addDeclarationToModule(source, modulePath, classifiedName, relativePath);
		const declarationRecorder = host.beginUpdate(modulePath);
		for (const change of declarationChanges) {
			if (change instanceof InsertChange) {
				declarationRecorder.insertLeft(change.pos, change.toAdd);
			}
		}
		host.commitUpdate(declarationRecorder);

		// Need to refresh the AST because we overwrote the file in the host.
		source = readIntoSourceFile(host, modulePath);
		const entryComponentRecorder = host.beginUpdate(modulePath);
		const entryComponentChanges = addEntryComponentToModule(source, modulePath, strings.classify(`${options.name}ExampleComponent`), relativePath);
		for (const change of entryComponentChanges) {
			if (change instanceof InsertChange) {
				entryComponentRecorder.insertLeft(change.pos, change.toAdd);
			}
		}
		host.commitUpdate(entryComponentRecorder);
		return host;
	};
};
