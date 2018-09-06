import { NgModule } from '@angular/core';
import { GeneralGuidelinesComponent } from './general-guidelines/general-guidelines.component';
import { LinksComponent } from './links/links.component';
import { DsCommonsModule } from '../../commons';
import { DsButtonsModule } from './buttons/buttons.module';
import { DsActionIconsModule } from './action-icons/action-icon.module';
import { DsGeneralGuidelinesModule } from './general-guidelines/general-guidelines.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsButtonsModule,
		DsActionIconsModule,
		DsGeneralGuidelinesModule
	],
	entryComponents: [
		LinksComponent
	],
	declarations: [
		LinksComponent
	]
})
export class ActionsModule { }
