import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { CommonModule } from '@prisme/common';
import { ModalsModule } from './modals';

@NgModule({
	imports: [
		CommonModule,
		MatDialogModule,
		ModalsModule,
	],
})
export class OverlaysModule {}
