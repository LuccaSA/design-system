import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsDocApiService } from './doc-api.service';

@NgModule({
	providers: [
		DsDocApiService
	],
})
export class DsDocApiModule {}
