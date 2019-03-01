import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ModuleRoutingModule } from './module.router';
import { ModuleComponent } from './module.component';


@NgModule({
	imports: [
		CommonModule,
		ModuleRoutingModule,
	],
	declarations: [
		ModuleComponent,
	],
})
export class ModuleModule { }
