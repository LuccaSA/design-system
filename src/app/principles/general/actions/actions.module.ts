import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { ActionsComponent } from './actions.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		ActionsComponent,
	],
	entryComponents: [
		ActionsComponent,
	]
})
export class DsActionsModule { }
