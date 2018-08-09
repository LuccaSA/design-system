import { NgModule } from '@angular/core';
import { ActionGuidelinesComponent } from './action-guidelines/action-guidelines.component';
import { ActionIconsComponent } from './action-icons/action-icons.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LinksComponent } from './links/links.component';
import { DsCommonsModule } from '../../commons';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	entryComponents: [
		ActionGuidelinesComponent,
		ActionIconsComponent,
		ButtonsComponent,
		LinksComponent
	],
	declarations: [
		ActionGuidelinesComponent,
		ActionIconsComponent,
		ButtonsComponent,
		LinksComponent
	]
})
export class ActionsModule { }
