import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsNgDocsComponent } from './ng-docs.component';
import { DsNgDocsClassComponent } from './ng-docs-class.component';
import { DsNgDocsConfigComponent } from './ng-docs-config.component';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		DsNgDocsComponent,
		DsNgDocsClassComponent,
		DsNgDocsConfigComponent,
	],
	exports: [
		DsNgDocsComponent
	],
	entryComponents: [
		DsNgDocsComponent
	]
})
export class DsNgDocsModule {}
