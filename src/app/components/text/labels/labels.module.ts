import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { LabelsComponent } from './labels.component';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		LabelsComponent,
		BasicExampleComponent
	],
	entryComponents: [
		LabelsComponent,
		BasicExampleComponent
	]
})
export class DsLabelsModule { }
