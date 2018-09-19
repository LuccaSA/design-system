import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { NavigationComponent } from './navigation.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		NavigationComponent
	],
	entryComponents: [
		NavigationComponent
	]
})
export class DsNavigationModule { }
