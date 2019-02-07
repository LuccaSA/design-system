import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { CommonModule } from '@prisme/common';
import { ModalsModule } from './modals';
import { TooltipsModule } from './tooltips';

@NgModule({
	imports: [
		CommonModule,
		MatDialogModule,
		ModalsModule,
		TooltipsModule,
	],
})
export class OverlaysModule {}
