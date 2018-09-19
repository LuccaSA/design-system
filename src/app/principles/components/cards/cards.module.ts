import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { CardsComponent } from './cards.component';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		CardsComponent,
	],
	entryComponents: [
		CardsComponent,
	]
})
export class DsCardsModule {}
