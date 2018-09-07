import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { FormGuidelinesPrinciplesComponent } from './form-guidelines.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		FormGuidelinesPrinciplesComponent,
	],
	entryComponents: [
		FormGuidelinesPrinciplesComponent,
	]
})
export class DsFormGuidelinesPrincipleModule { }
