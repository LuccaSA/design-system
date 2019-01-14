import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDocumentationComponent } from './theme-documentation.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		ThemeDocumentationComponent
	],
	exports: [
		ThemeDocumentationComponent
	],
})
export class ThemeDocumentationModule {}
