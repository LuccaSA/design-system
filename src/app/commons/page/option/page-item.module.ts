import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsPageItemComponent } from './page-item.component';
// import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		DsPageItemComponent,
	],
	exports: [
		DsPageItemComponent,
	],
})
export class DsPageItemModule { }
