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

export function addDeclarationToNgModule(options: IOptions) {
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
}


function insertExport(fileToEdit: string, fileName: string): Change {
	const exportStatement = `export * from '${fileName}';\n`;
	return new InsertChange(fileToEdit, 0, exportStatement);
}
// function getTsSourceFile(host: Tree, path: string): ts.SourceFile {
// 	const buffer = host.read(path);
// 	if (!buffer) {
// 		throw new SchematicsException(`Could not read file (${path}).`);
// 	}
// 	const content = buffer.toString();
// 	const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);

// 	return source;
// }
export function updateIndex(options: IOptions, fileExtension: string) {
	return (host: Tree, context: SchematicContext) => {
		context.logger.debug('updating index');
		// find index file
		const indexPath = `${options.path}/index.ts`;
		// const indexFile = getTsSourceFile(host, indexPath);
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
