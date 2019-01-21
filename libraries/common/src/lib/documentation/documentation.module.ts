import { NgModule } from '@angular/core';
import { ThemeDocumentationModule } from './theme/index';
import { InterfaceDocumentationModule } from './interface/index';
import { ClassDocumentationModule } from './class/index';
import { ModuleDocumentationModule } from './module/index';
import { InjectableDocumentationModule } from './injectable/index';
import { PipeDocumentationModule } from './pipe/index';
import { DirectiveDocumentationModule } from './directive';

@NgModule({
	imports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
		ModuleDocumentationModule,
		InjectableDocumentationModule,
		PipeDocumentationModule,
		DirectiveDocumentationModule,
	],
	exports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
		ModuleDocumentationModule,
		InjectableDocumentationModule,
		PipeDocumentationModule,
		DirectiveDocumentationModule,
	],
})
export class DocumentationModule {}
