import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from './theme.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: ThemeComponent }
		]),
	],
	exports: [
		RouterModule,
	],
})
export class ThemeRoutingModule {}
