import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { LuModule } from '@lucca-front/ng';
import { SearchService } from './search.service';
import { PageOptionComponent } from './page-option.component';


@NgModule({
	imports: [
		FormsModule,
		LuModule,
		CommonModule,
	],
	declarations: [
		SearchComponent,
		PageOptionComponent,
	],
	exports: [
		SearchComponent
	],
	providers: [
		SearchService,
	]
})
export class SearchModule { }
