import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { BoxesComponent } from './boxes.component';
import { BasicExampleComponent } from './basic/basic.example';
import { ToggleExampleComponent } from './toggle/toggle.example';
import { KillableExampleComponent } from './killable/killable.example';

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
