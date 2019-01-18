import { NgModule } from '@angular/core';
import { PageModule } from '@prisme/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { LuModule } from '@lucca-front/ng';


@NgModule({
	imports: [
		PageModule,
		FormsModule,
		LuModule
	],
	declarations: [
		SearchComponent
	],
	exports: [
		SearchComponent
	],
})
export class SearchModule { }
