import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { TypographyComponent } from './typography.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		TypographyComponent,
	],
	entryComponents: [
		TypographyComponent,
	]
})
export class DsTypographyModule { }
