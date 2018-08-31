import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { BoxesComponent } from './boxes.component';
import { BasicExampleComponent } from './basic/basic.component';
import { ToggleExampleComponent } from './toggle/toggle.component';
import { KillableExampleComponent } from './killable/killable.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		BoxesComponent,
		BasicExampleComponent,
		ToggleExampleComponent,
		KillableExampleComponent,
	],
	entryComponents: [
		BoxesComponent,
		BasicExampleComponent,
		ToggleExampleComponent,
		KillableExampleComponent,
	]
})
export class DsBoxesModule { }
