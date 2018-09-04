import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { DsLoadingsModule } from './loadings/loadings.module';
import { DsProgressModule } from './progress/progress.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsLoadingsModule,
		DsProgressModule
	]
})
export class LoadersModule { }
