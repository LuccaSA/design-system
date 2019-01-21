import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentComponent } from './component.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: ComponentComponent }
		]),
	],
	exports: [
		RouterModule,
	],
})
export class ComponentRoutingModule {}
