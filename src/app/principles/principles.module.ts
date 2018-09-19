import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsCommonsModule } from '@ds/commons';
import { RouterModule } from '@angular/router';
import { DsGeneralPrinciplesModule } from './general/general.module';
import { DsComponentsPrinciplesModule } from './components/components.module';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		DsCommonsModule,
		DsGeneralPrinciplesModule,
		DsComponentsPrinciplesModule,
	]
})
export class DsPrinciplesModule { }
