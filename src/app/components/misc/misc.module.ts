import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { FunctionsComponent } from './functions/functions.component';
import { MixinsComponent } from './mixins/mixins.component';
import { UtilitiesComponent } from './utilities/utilities.component';

@NgModule({
	imports: [
		DsCommonsModule,
	],
	entryComponents: [
		FunctionsComponent,
		MixinsComponent,
		UtilitiesComponent,
	],
	declarations: [
		FunctionsComponent,
		MixinsComponent,
		UtilitiesComponent,
	]
})
export class MiscModule { }
