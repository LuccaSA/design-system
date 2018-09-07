import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { CardsPrinciplesComponent } from './cards.component';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		CardsPrinciplesComponent,
	],
	entryComponents: [
		CardsPrinciplesComponent,
	]
})
export class DsCardsPrinciplesModule {}
