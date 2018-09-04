import { NgModule } from '@angular/core';
import { GeneralGuidelinesComponent } from './general-guidelines/general-guidelines.component';
import { LinksComponent } from './links/links.component';
import { DsCommonsModule } from '../../commons';
import { DsButtonsModule } from './buttons/buttons.module';
import { DsActionIconsModule } from './action-icons/action-icon.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsButtonsModule,
		DsActionIconsModule
	],
	entryComponents: [
		GeneralGuidelinesComponent,
		LinksComponent
	],
	declarations: [
		GeneralGuidelinesComponent,
		LinksComponent
	]
})
export class ActionsModule { }
