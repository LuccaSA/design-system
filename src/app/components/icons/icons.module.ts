import { NgModule } from '@angular/core';
import { IconsComponent } from './icons.component';
import { DsCommonsModule } from '../../commons/commons.module';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	entryComponents: [
		IconsComponent
	],
	declarations: [
		IconsComponent
	]
})
export class IconsModule { }
