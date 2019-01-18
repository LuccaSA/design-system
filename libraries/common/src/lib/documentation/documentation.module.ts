import { NgModule } from '@angular/core';
import { ThemeDocumentationModule } from './theme/index';
import { InterfaceDocumentationModule } from './interface/index';
import { ClassDocumentationModule } from './class/index';
import { ModuleDocumentationModule } from './module/index';

@NgModule({
	imports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
		ModuleDocumentationModule
	],
	exports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
		ModuleDocumentationModule
	],
})
export class DocumentationModule {}
