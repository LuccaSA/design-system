import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsSafeContentPipe } from './safe-content.pipe';

@NgModule({
	imports: [ CommonModule ],
	declarations: [DsSafeContentPipe],
	exports: [DsSafeContentPipe],
	providers: [DsSafeContentPipe],
})
export class DsSafeContentModule {}
