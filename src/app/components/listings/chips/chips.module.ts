import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { ChipsComponent } from './chips.component';
import { BasicExampleComponent } from './basic/basic.example';
import { UnkillableExampleComponent } from './unkillable/unkillable.example';

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
