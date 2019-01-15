import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDocumentationComponent } from './theme-documentation.component';
import { ThemeDocumentationService } from './theme-documentation.service';

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
	providers: [
		ThemeDocumentationService,
	]
})
export class ThemeDocumentationModule {}
