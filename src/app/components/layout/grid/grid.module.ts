import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { GridComponent } from './grid.component';
import { BasicExampleComponent } from './basic/basic.example';
import { OffsetExampleComponent } from './offset/offset.example';
import { AutoExampleComponent } from './auto/auto.example';
import { ReorganisationExampleComponent } from './reorganisation/reorganisation.example';
import { VerticalExampleComponent } from './vertical/vertical.example';
import { HorizontalExampleComponent } from './horizontal/horizontal.example';

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
