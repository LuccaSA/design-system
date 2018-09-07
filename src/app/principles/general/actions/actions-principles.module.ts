import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { ActionsPrinciplesComponent } from './actions-principles.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		ActionsPrinciplesComponent,
	],
	entryComponents: [
		ActionsPrinciplesComponent,
	]
})
export class DsActionsPrinciplesModule { }
