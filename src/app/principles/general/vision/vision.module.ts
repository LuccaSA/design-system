import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { VisionComponent } from './vision.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		VisionComponent,
	],
	entryComponents: [
		VisionComponent,
	]
})
export class DsVisionModule { }
