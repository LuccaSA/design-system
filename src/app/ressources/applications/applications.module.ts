import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { ApplicationsComponent } from './applications.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		DsCommonsModule
	],
	declarations: [
		ApplicationsComponent,
	],
	entryComponents: [
		ApplicationsComponent,
	]
})
export class DsApplicationsModule { }
