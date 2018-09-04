import { NgModule } from '@angular/core';
import { DsPageItemModule } from '../commons/page/option/page-item.module';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { LuModule } from '@lucca-front/ng';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [
		DsPageItemModule,
		FormsModule,
		LuModule,
		RouterModule
	],
	declarations: [
		SearchComponent
	],
	exports: [
		SearchComponent
	],
})
export class DsSearchModule { }
