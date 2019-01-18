import { NgModule } from '@angular/core';
import { ThemeDocumentationModule } from './theme/index';

@NgModule({
	imports: [
		ThemeDocumentationModule,
	],
	exports: [
		ThemeDocumentationModule,
	],
})
export class DocumentationModule {}
