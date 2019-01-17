import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { InterfaceRoutingModule } from './interface.router';
import { InterfaceComponent } from './interface.component';


@NgModule({
	imports: [
		CommonModule,
		InterfaceRoutingModule,
	],
	declarations: [
		InterfaceComponent,
	],
})
export class InterfaceModule { }
