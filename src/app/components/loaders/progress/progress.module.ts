import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { ProgressComponent } from './progress.component';
import { BasicExampleComponent } from './basic/basic.example';
import { IndeterminateExampleComponent } from './indeterminate/indeterminate.example';
import { StatusExampleComponent } from './status/status.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		ProgressComponent,
		BasicExampleComponent,
		IndeterminateExampleComponent,
		StatusExampleComponent,
	],
	entryComponents: [
		ProgressComponent,
		BasicExampleComponent,
		IndeterminateExampleComponent,
		StatusExampleComponent,
	]
})
export class DsProgressModule { }
