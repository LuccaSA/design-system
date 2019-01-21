import { NgModule } from '@angular/core';
import { ThemeDocumentationModule } from './theme/index';
import { InterfaceDocumentationModule } from './interface/index';
import { ClassDocumentationModule } from './class/index';
import { ModuleDocumentationModule } from './module/index';
import { InjectableDocumentationModule } from './injectable/index';
import { PipeDocumentationModule } from './pipe/index';

@NgModule({
	imports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
		ModuleDocumentationModule,
		InjectableDocumentationModule,
		PipeDocumentationModule,
	],
	exports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
		ModuleDocumentationModule,
		InjectableDocumentationModule,
		PipeDocumentationModule,
	],
})
export class DocumentationModule {}
