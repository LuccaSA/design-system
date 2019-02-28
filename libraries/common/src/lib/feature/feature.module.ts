import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleModule } from './example/index';
import { FeatureComponent } from './feature.component';
import { DocumentationModule } from '../documentation/index';
import { MarkdownModule } from '../markdown/index';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		ExampleModule,
		DocumentationModule,
		MarkdownModule,
		RouterModule,
	],
	declarations: [
		FeatureComponent,
	],
	exports: [
		FeatureComponent,
	],
})
export class FeatureModule {}
