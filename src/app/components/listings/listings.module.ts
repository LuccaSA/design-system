import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { ChipsComponent } from './chips/chips.component';
import { ListsComponent } from './lists/lists.component';
import { TablesComponent } from './tables/tables.component';
import { BasicExampleComponent } from './chips/basic/basic.component';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	entryComponents: [
		ChipsComponent,
		ListsComponent,
		TablesComponent,
		BasicExampleComponent
	],
	declarations: [
		ChipsComponent,
		ListsComponent,
		TablesComponent,
		BasicExampleComponent
	]
})
export class ListingsModule { }
