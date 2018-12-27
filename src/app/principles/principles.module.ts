import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsCommonsModule } from '@ds/commons';
import { RouterModule } from '@angular/router';
import { DsGeneralPrinciplesModule } from './general/general.module';
import { DsComponentsPrinciplesModule } from './components/components.module';
import { DsPrinciplesRoutingModule } from './principles.router';
import { DsMainModule } from '../main';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		DsCommonsModule,
		DsGeneralPrinciplesModule,
		DsComponentsPrinciplesModule,
		DsPrinciplesRoutingModule,
		DsMainModule,
	]
})
export class DsPrinciplesModule { }
