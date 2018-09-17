import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { EmptyStatesPrinciplesComponent } from './empty-states.component';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		EmptyStatesPrinciplesComponent
	],
	entryComponents: [
		EmptyStatesPrinciplesComponent
	]
})
export class DsEmptyStatesPrinciplesModule {}
