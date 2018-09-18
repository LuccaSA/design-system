import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
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
