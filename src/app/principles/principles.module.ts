import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { VisionComponent } from './vision/vision.component';
import { CommonsModule } from '../commons/commons.module';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		CommonsModule,
		RouterModule
	],
	declarations: [
		AccessibilityComponent,
		VisionComponent,
	],
	entryComponents: [
		AccessibilityComponent,
		VisionComponent
	]
})
export class PrinciplesModule { }
