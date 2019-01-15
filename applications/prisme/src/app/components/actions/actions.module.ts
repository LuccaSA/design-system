import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { ButtonsModule } from './buttons/buttons.module';
import { ActionIconsModule } from './action-icons/action-icons.module';
import { LinksModule } from './links/links.module';

@NgModule({
	imports: [
		CommonModule,
		ButtonsModule,
		ActionIconsModule,
		LinksModule
	],
})
export class ActionsModule { }
