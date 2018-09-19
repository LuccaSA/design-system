import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { UserTileComponent } from './user-tile.component';
import { BasicExampleComponent } from './basic/basic.example';
import { LuUserTileModule } from '@lucca-front/ng';

@NgModule({
	imports: [
		DsCommonsModule,
		LuUserTileModule,
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
export class DsUserTileModule { }
