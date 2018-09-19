import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { TablesComponent } from './tables.component';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	declarations: [
		TablesComponent
	],
	entryComponents: [
		TablesComponent
	]
})
export class DsTablesModule { }
