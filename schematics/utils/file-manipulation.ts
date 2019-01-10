import { buildRelativePath } from '@schematics/angular/utility/find-module';
import { addDeclarationToModule, addEntryComponentToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange, Change } from '@schematics/angular/utility/change';
import * as ts from 'typescript';
import { Tree, SchematicsException, SchematicContext } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { IOptions } from '../schema';

function readIntoSourceFile(host: Tree, modulePath: string) {
	const text = host.read(modulePath);
	if (text === null) {
		throw new SchematicsException(`File ${modulePath} does not exist.`);
	}
	const sourceText = text.toString('utf-8');
	return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}

export function addComponentDeclarationToModule(
	options: IOptions,
	fileExtension: string = 'component',
	classExtension: string = strings.classify(fileExtension),
	isEntryComponent: boolean = false,
) {
	return (host: Tree) => {
		if (!options.module) {
			return host;
		}
		const modulePath = options.module;
		let source = readIntoSourceFile(host, modulePath);
		const componentPath = `/${options.path}/${strings.dasherize(options.name)}.${fileExtension}`;
		const relativePath = buildRelativePath(modulePath, componentPath);
		const classifiedName = strings.classify(`${options.name}${classExtension}`);
		const declarationChanges = addDeclarationToModule(source, modulePath, classifiedName, relativePath);
		const declarationRecorder = host.beginUpdate(modulePath);
		for (const change of declarationChanges) {
			if (change instanceof InsertChange) {
				declarationRecorder.insertLeft(change.pos, change.toAdd);
			}
		}
		host.commitUpdate(declarationRecorder);

		if (isEntryComponent) {
			// Need to refresh the AST because we overwrote the file in the host.
			source = readIntoSourceFile(host, modulePath);
			const entryComponentRecorder = host.beginUpdate(modulePath);
			const entryComponentChanges = addEntryComponentToModule(source, modulePath, classifiedName, relativePath);
			for (const change of entryComponentChanges) {
				if (change instanceof InsertChange) {
					entryComponentRecorder.insertLeft(change.pos, change.toAdd);
				}
			}
			host.commitUpdate(entryComponentRecorder);
		}
		return host;
	};
}

function insertExport(fileToEdit: string, fileName: string): Change {
	const exportStatement = `export * from '${fileName}';\n`;
	return new InsertChange(fileToEdit, 0, exportStatement);
}

export function updateIndex(options: IOptions, fileExtension: string) {
	return (host: Tree, context: SchematicContext) => {
		const indexPath = `${options.path}/index.ts`;
		const fileRelativePath = `./${strings.dasherize(options.name)}.${fileExtension}`;

		const change = insertExport(indexPath, fileRelativePath);
		if (change) {
			const recorder = host.beginUpdate(indexPath);
			recorder.insertLeft((change as InsertChange).pos, (change as InsertChange).toAdd);
			host.commitUpdate(recorder);
		}

		return host;
	};
}
