import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { RouterModule } from '@angular/router';
import { GeneralPrinciplesModule } from './general/general.module';
import { ComponentsPrinciplesModule } from './components/components.module';
import { PrinciplesRoutingModule } from './principles.router';
import { MainModule } from '../main';
import { ContentModule } from './content';

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		GeneralPrinciplesModule,
		ComponentsPrinciplesModule,
		PrinciplesRoutingModule,
		ContentModule,
		MainModule,
	]
})
export class PrinciplesModule { }
