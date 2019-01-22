import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InjectableComponent } from './injectable.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: InjectableComponent }
		]),
	],
	exports: [
		RouterModule,
	],
})
export class InjectableRoutingModule {}
