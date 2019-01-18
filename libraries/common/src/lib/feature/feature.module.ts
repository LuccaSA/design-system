import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleModule } from './example/index';
import { FeatureComponent } from './feature.component';
import { DocumentationModule } from '../documentation/index';
import { MarkdownModule } from '../markdown/index';

@NgModule({
	imports: [
		CommonModule,
		ExampleModule,
		DocumentationModule,
		MarkdownModule,
	],
	declarations: [
		FeatureComponent,
	],
	exports: [
		FeatureComponent,
	],
})
export class FeatureModule {}
