import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { ActionIconsComponent } from './action-icons.component';
import { BasicExampleComponent } from './basic/basic.component';
import { StatusExampleComponent } from './status/status.component';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		ActionIconsComponent,
		BasicExampleComponent,
		StatusExampleComponent
	],
	entryComponents: [
		ActionIconsComponent,
		BasicExampleComponent,
		StatusExampleComponent
	]
})
export class DsActionIconsModule {}
