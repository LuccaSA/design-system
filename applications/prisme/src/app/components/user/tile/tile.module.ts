import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TileFeature } from './tile.feature';
import { BasicExample } from './basic/basic.example';
import { LuUserTileModule } from '@lucca-front/ng';
import { DisplayFormatExample } from './display-format/display-format.example';
import { SizesExample } from './sizes/sizes.example';

@NgModule({
	imports: [
		CommonModule,
		LuUserTileModule,
	],
	declarations: [
	TileFeature,
	BasicExample,
	DisplayFormatExample,
	SizesExample],
	entryComponents: [
	BasicExample,
	DisplayFormatExample,
	SizesExample]
})
export class TileModule {}
