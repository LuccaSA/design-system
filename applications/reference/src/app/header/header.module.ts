import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { LuModule } from '@lucca-front/ng';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from '../search';

@NgModule({
	imports: [
		RouterModule,
		LuModule,
		ReactiveFormsModule,
		SearchModule,
	],
	declarations: [
		HeaderComponent
	],
	exports: [
		HeaderComponent
	]
})
export class HeaderModule { }
