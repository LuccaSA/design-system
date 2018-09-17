import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { NavigationPrinciplesComponent } from './navigation.component';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		NavigationPrinciplesComponent
	],
	entryComponents: [
		NavigationPrinciplesComponent
	]
})
export class DsNavigationPrincipleModule { }
