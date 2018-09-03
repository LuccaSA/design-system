import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { EmptyStatesComponent } from './empty-states.component';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		EmptyStatesComponent,
		BasicExampleComponent
	],
	entryComponents: [
		EmptyStatesComponent,
		BasicExampleComponent
	]
})
export class DsEmptyStatesModule {}
