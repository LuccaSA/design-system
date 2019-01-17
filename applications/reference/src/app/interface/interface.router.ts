import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InterfaceComponent } from './interface.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: InterfaceComponent }
		]),
	],
	exports: [
		RouterModule,
	],
})
export class InterfaceRoutingModule {}
