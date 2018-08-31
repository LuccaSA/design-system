import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { LabelsComponent } from './labels.component';
import { BasicExampleComponent } from './basic/basic.component';

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
