import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { CardsFeature } from './cards.feature';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		CardsFeature,
	],
	entryComponents: [
		CardsFeature,
	]
})
export class CardsModule {}
