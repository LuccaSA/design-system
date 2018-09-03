import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { ListsComponent } from './lists.component';
import { BasicExampleComponent } from './basic/basic.example';
import { ClickableExampleComponent } from './clickable/clickable.example';

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
