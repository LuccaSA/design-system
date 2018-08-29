import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { BasicExampleComponent } from './basic/basic.component';
import { ContainersComponent } from './containers.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		ContainersComponent,
		BasicExampleComponent
	],
	entryComponents: [
		ContainersComponent,
		BasicExampleComponent
	]
})
export class DsContainersModule { }
