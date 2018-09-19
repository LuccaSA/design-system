import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { DsChipsModule } from './chips/chips.module';
import { DsListsModule } from './lists/lists.module';
import { DsTablesModule } from './tables/tables.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsChipsModule,
		DsListsModule,
		DsTablesModule
	]
})
export class ListingsModule { }
