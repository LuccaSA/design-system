import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { EmptyStatesComponent } from './empty-states.component';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		EmptyStatesComponent
	],
	entryComponents: [
		EmptyStatesComponent
	]
})
export class DsEmptyStatesModule {}
