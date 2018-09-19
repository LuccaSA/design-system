import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { AccessibilityComponent } from './accessibility.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		AccessibilityComponent,
	],
	entryComponents: [
		AccessibilityComponent,
	]
})
export class DsAccessibilityModule { }
