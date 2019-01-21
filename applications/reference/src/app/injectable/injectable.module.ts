import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { InjectableRoutingModule } from './injectable.router';
import { InjectableComponent } from './injectable.component';


@NgModule({
	imports: [
		CommonModule,
		InjectableRoutingModule,
	],
	declarations: [
		InjectableComponent,
	],
})
export class InjectableModule { }
