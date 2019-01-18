import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { NavigationFeature } from './navigation.feature';

@NgModule({
	imports: [CommonModule],
	declarations: [
		NavigationFeature
	],
	entryComponents: [
		NavigationFeature
	]
})
export class NavigationModule { }
