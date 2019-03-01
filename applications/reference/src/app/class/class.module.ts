import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ClassRoutingModule } from './class.router';
import { ClassComponent } from './class.component';


@NgModule({
	imports: [
		CommonModule,
		ClassRoutingModule,
	],
	declarations: [
		ClassComponent,
	],
})
export class ClassModule { }
