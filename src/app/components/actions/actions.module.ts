import { NgModule } from '@angular/core';
import { LinksComponent } from './links/links.component';
import { DsCommonsModule } from '@ds/commons';
import { DsButtonsModule } from './buttons/buttons.module';
import { DsActionIconsModule } from './action-icons/action-icons.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsButtonsModule,
		DsActionIconsModule
	],
	entryComponents: [
		LinksComponent
	],
	declarations: [
		LinksComponent
	]
})
export class ActionsModule { }
