import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { DirectiveRoutingModule } from './directive.router';
import { DirectiveComponent } from './directive.component';


@NgModule({
	imports: [
		CommonModule,
		DirectiveRoutingModule,
	],
	declarations: [
		DirectiveComponent,
	],
})
export class DirectiveModule { }
