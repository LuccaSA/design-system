import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { FunctionsComponent } from './functions/functions.component';
import { MixinsComponent } from './mixins/mixins.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { DsAnimationsModule } from './animations/animations.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsAnimationsModule,
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
