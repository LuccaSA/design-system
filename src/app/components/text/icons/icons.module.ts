import { NgModule } from '@angular/core';
import { IconsComponent } from './icons.component';
import { DsCommonsModule } from '../../../commons';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		DsCommonsModule,
		RouterModule,
	],
	entryComponents: [
		IconsComponent
	],
	declarations: [
		IconsComponent
	]
})
export class DsIconsModule { }
