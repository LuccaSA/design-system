import { NgModule } from '@angular/core';
import { ThemeDocumentationModule } from './theme/index';
import { InterfaceDocumentationModule } from './interface/index';
import { ClassDocumentationModule } from './class/index';

@NgModule({
	imports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
	],
	exports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
		ClassDocumentationModule,
	],
})
export class DocumentationModule {}
