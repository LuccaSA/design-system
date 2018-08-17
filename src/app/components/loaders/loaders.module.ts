import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { LoadingsComponent } from './loadings/loadings.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
	imports: [
		DsCommonsModule
	],
	entryComponents: [
		LoadingsComponent,
		ProgressComponent,
	],
	declarations: [
		LoadingsComponent,
		ProgressComponent,
	]
})
export class LoadersModule { }
