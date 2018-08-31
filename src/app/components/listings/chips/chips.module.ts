import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { ChipsComponent } from './chips.component';
import { BasicExampleComponent } from './basic/basic.component';
import { UnkillableExampleComponent } from './unkillable/unkillable.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		ChipsComponent,
		BasicExampleComponent,
		UnkillableExampleComponent
	],
	entryComponents: [
		ChipsComponent,
		BasicExampleComponent,
		UnkillableExampleComponent
	]
})
export class DsChipsModule { }
