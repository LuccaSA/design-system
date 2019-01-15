import { NgModule } from '@angular/core';

import { CommonModule } from '@prisme/common';
import { ContentRoutingModule } from './content.router';
import { MainModule } from '../main';

@NgModule({
	imports: [
		CommonModule,
		ContentRoutingModule,
		MainModule,
	],
})
export class ContentModule { }
