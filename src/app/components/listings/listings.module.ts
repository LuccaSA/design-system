import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { ChipsComponent } from './chips/chips.component';
import { ListsComponent } from './lists/lists.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	entryComponents: [
		ChipsComponent,
		ListsComponent,
		TablesComponent,
	],
	declarations: [
		ChipsComponent,
		ListsComponent,
		TablesComponent,
	]
})
export class ListingsModule { }
