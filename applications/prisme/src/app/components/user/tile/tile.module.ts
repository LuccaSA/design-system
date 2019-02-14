import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TileFeature } from './tile.feature';
import { BasicExample } from './basic/basic.example';
import { LuUserTileModule } from '@lucca-front/ng';

@NgModule({
	imports: [
		CommonModule,
		LuUserTileModule,
	],
	declarations: [
	TileFeature,
	BasicExample],
	entryComponents: [
	BasicExample]
})
export class TileModule {}
