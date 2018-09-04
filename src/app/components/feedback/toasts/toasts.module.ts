import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { ToastsComponent } from './toasts.component';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		ToastsComponent,
		BasicExampleComponent,
	],
	entryComponents: [
		ToastsComponent,
		BasicExampleComponent,
	]
})
export class DsToastsModule { }
