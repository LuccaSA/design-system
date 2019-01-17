import { NgModule } from '@angular/core';
import { ThemeDocumentationModule } from './theme/index';
import { InterfaceDocumentationModule } from './interface/index';

@NgModule({
	imports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
	],
	exports: [
		ThemeDocumentationModule,
		InterfaceDocumentationModule,
	],
})
export class DocumentationModule {}
