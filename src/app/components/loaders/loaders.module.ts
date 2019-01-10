import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { DsLoadingsModule } from './loadings/loadings.module';
import { DsProgressModule } from './progress/progress.module';
import { DsGaugeModule } from './gauge';

@NgModule({
	imports: [
		DsCommonsModule,
		DsLoadingsModule,
		DsProgressModule,
		DsGaugeModule,
	]
})
export class LoadersModule { }
