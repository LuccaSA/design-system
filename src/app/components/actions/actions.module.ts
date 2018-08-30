import { NgModule } from '@angular/core';
import { ActionGuidelinesComponent } from './action-guidelines/action-guidelines.component';
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
		ActionGuidelinesComponent,
		LinksComponent
	],
	declarations: [
		ActionGuidelinesComponent,
		LinksComponent
	]
})
export class ActionsModule { }
