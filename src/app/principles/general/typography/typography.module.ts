import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { TypographyPrinciplesComponent } from './typography.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		TypographyPrinciplesComponent,
	],
	entryComponents: [
		TypographyPrinciplesComponent,
	]
})
export class DsTypographyPrinciplesModule { }
