import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { ActionIconsComponent } from './action-icons.component';
import { BasicExampleComponent } from './basic/basic.example';
import { StatusExampleComponent } from './status/status.example';

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
