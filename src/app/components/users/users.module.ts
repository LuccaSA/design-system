import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTileComponent } from './user-tile/user-tile.component';
import { LuUserModule } from '@lucca-front/ng';
import { DsCommonsModule } from '../../commons';
import { BasicExampleComponent } from './user-tile/basic/basic.component';

@NgModule({
	imports: [
		CommonModule,
		LuUserModule,
		DsCommonsModule
	],
	declarations: [
		UserTileComponent,
		BasicExampleComponent
	],
	entryComponents: [
		UserTileComponent,
		BasicExampleComponent
	]
})
export class UsersModule { }
