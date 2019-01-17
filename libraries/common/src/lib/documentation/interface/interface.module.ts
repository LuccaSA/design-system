import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceDocumentationComponent } from './interface.component';
import { PropertyDocumentationComponent } from './property.component';
import { InterfaceDocumentationService } from './interface.service';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		InterfaceDocumentationComponent,
		PropertyDocumentationComponent,
	],
	exports: [
		InterfaceDocumentationComponent
	],
	providers: [
		InterfaceDocumentationService,
	],
})
export class InterfaceDocumentationModule {}
