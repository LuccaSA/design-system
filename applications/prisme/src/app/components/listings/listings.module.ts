import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ChipsModule } from './chips/chips.module';
import { ListsModule } from './lists/lists.module';
import { TablesModule } from './tables/tables.module';

@NgModule({
	imports: [
		CommonModule,
		ChipsModule,
		ListsModule,
		TablesModule
	]
})
export class ListingsModule { }
