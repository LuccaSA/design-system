import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { ListsComponent } from './lists.component';
import { BasicExampleComponent } from './basic/basic.component';
import { ClickableExampleComponent } from './clickable/clickable.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		ListsComponent,
		BasicExampleComponent,
		ClickableExampleComponent
	],
	entryComponents: [
		ListsComponent,
		BasicExampleComponent,
		ClickableExampleComponent
	]
})
export class DsListsModule { }
