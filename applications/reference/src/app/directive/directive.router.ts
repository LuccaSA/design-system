import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectiveComponent } from './directive.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: DirectiveComponent }
		]),
	],
	exports: [
		RouterModule,
	],
})
export class DirectiveRoutingModule {}
