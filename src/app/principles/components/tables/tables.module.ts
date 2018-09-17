import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { TablesPrinciplesComponent } from './tables.component';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	declarations: [
		TablesPrinciplesComponent
	],
	entryComponents: [
		TablesPrinciplesComponent
	]
})
export class DsTablesPrinciplesModule { }
