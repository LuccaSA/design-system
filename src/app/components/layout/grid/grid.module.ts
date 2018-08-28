import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { GridComponent } from './grid.component';
import { BasicExampleComponent } from './basic/basic.component';
import { OffsetExampleComponent } from './offset/offset.component';
import { AutoExampleComponent } from './auto/auto.component';
import { ReorganisationExampleComponent } from './reorganisation/reorganisation.component';
import { VerticalExampleComponent } from './vertical/vertical.component';
import { HorizontalExampleComponent } from './horizontal/horizontal.component';

@NgModule({
	imports: [
		DsCommonsModule
	],
	declarations: [
		GridComponent,
		BasicExampleComponent,
		OffsetExampleComponent,
		AutoExampleComponent,
		ReorganisationExampleComponent,
		VerticalExampleComponent,
		HorizontalExampleComponent
	],
	entryComponents: [
		GridComponent,
		BasicExampleComponent,
		OffsetExampleComponent,
		AutoExampleComponent,
		ReorganisationExampleComponent,
		VerticalExampleComponent,
		HorizontalExampleComponent
	],
})
export class DsGridModule { }
