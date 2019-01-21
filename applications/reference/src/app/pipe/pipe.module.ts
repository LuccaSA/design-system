import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { PipeRoutingModule } from './pipe.router';
import { PipeComponent } from './pipe.component';


@NgModule({
	imports: [
		CommonModule,
		PipeRoutingModule,
	],
	declarations: [
		PipeComponent,
	],
})
export class PipeModule { }
