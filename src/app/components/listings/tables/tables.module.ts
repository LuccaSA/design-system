import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { TablesComponent } from './tables.component';
import { BasicExampleComponent } from './basic/basic.component';
import { ZebraExampleComponent } from './zebra/zebra.component';
import { ClickableExampleComponent } from './clickable/clickable.component';
import { SortableExampleComponent } from './sortable/sortable.component';
import { ActionsExampleComponent } from './actions/actions.component';
import { CardExampleComponent } from './card/card.component';
import { FiltersExampleComponent } from './filters/filters.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		TablesComponent,
		BasicExampleComponent,
		ZebraExampleComponent,
		ClickableExampleComponent,
		SortableExampleComponent,
		ActionsExampleComponent,
		CardExampleComponent,
		FiltersExampleComponent,
	],
	entryComponents: [
		TablesComponent,
		BasicExampleComponent,
		ZebraExampleComponent,
		ClickableExampleComponent,
		SortableExampleComponent,
		ActionsExampleComponent,
		CardExampleComponent,
		FiltersExampleComponent,
	]
})
export class DsTablesModule { }
