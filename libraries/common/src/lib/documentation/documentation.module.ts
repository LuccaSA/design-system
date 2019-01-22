import { NgModule } from '@angular/core';
import { ThemeDocumentationModule } from './theme/index';
import { InterfaceDocumentationModule } from './interface/index';
import { ClassDocumentationModule } from './class/index';
import { ModuleDocumentationModule } from './module/index';
import { InjectableDocumentationModule } from './injectable/index';

@NgModule({
	imports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
		ModuleDocumentationModule,
		InjectableDocumentationModule,
	],
	exports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
		ModuleDocumentationModule,
		InjectableDocumentationModule,
	],
})
export class DocumentationModule {}
