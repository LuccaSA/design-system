import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ComponentRoutingModule } from './component.router';
import { ComponentComponent } from './component.component';


@NgModule({
	imports: [
		CommonModule,
		ComponentRoutingModule,
	],
	declarations: [
		ComponentComponent,
	],
})
export class ComponentModule { }
