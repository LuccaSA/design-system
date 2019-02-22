import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SelectModule } from './select';
import { TileModule } from './tile';

@NgModule({
	imports: [
		CommonModule,
		SelectModule,
		TileModule
	],
})
export class UserModule {}
