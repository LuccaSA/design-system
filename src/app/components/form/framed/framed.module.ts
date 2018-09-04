import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { FramedComponent } from './framed.component';
import { BasicExampleComponent } from './basic/basic.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		FramedComponent,
		BasicExampleComponent,
	],
	entryComponents: [
		FramedComponent,
		BasicExampleComponent,
	]
})
export class DsFramedModule { }
