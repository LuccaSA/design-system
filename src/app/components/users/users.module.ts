import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsCommonsModule } from '@ds/commons';
import { DsUserTileModule } from './user-tile/user-tile.module';

@NgModule({
	imports: [
		CommonModule,
		DsCommonsModule,
		DsUserTileModule
	],
})
export class UsersModule { }
