import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TileFeature } from './tile.feature';
import { BasicExample } from './basic/basic.example';
import { LuUserTileModule } from '@lucca-front/ng';
import { DisplayFormatExample } from './display-format/display-format.example';

@NgModule({
	imports: [
		CommonModule,
		LuUserTileModule,
	],
	declarations: [
	TileFeature,
	BasicExample,
	DisplayFormatExample],
	entryComponents: [
	BasicExample,
	DisplayFormatExample]
})
export class TileModule {}
