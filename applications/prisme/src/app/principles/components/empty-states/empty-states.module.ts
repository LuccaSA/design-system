import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { EmptyStatesFeature } from './empty-states.feature';

@NgModule({
	imports: [ CommonModule ],
	declarations: [
		EmptyStatesFeature
	],
	entryComponents: [
		EmptyStatesFeature
	]
})
export class EmptyStatesModule {}
