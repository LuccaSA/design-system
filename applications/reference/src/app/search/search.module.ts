import { NgModule } from '@angular/core';
import { PageModule, CommonModule } from '@prisme/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { LuModule } from '@lucca-front/ng';
import { SearchService } from './search.service';


@NgModule({
	imports: [
		PageModule,
		FormsModule,
		LuModule,
		CommonModule,
	],
	declarations: [
		SearchComponent
	],
	exports: [
		SearchComponent
	],
	providers: [
		SearchService,
	]
})
export class SearchModule { }
