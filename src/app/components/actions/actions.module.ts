import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { DsButtonsModule } from './buttons/buttons.module';
import { DsActionIconsModule } from './action-icons/action-icons.module';
import { DsLinksModule } from './links/links.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsButtonsModule,
		DsActionIconsModule,
		DsLinksModule
	],
	entryComponents: [
	],
	declarations: [
	]
})
export class ActionsModule { }
