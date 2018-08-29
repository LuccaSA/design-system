import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { CardsComponent } from './cards.component';
import { BasicExampleComponent } from './basic/basic.component';
import { ClickableExampleComponent } from './clickable/clickable.component';
import { DisabledExampleComponent } from './disabled/disabled.component';
import { FooterExampleComponent } from './footer/footer.component';
import { GreyExampleComponent } from './grey/grey.component';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		CardsComponent,
		BasicExampleComponent,
		ClickableExampleComponent,
		DisabledExampleComponent,
		FooterExampleComponent,
		GreyExampleComponent
	],
	entryComponents: [
		CardsComponent,
		BasicExampleComponent,
		ClickableExampleComponent,
		DisabledExampleComponent,
		FooterExampleComponent,
		GreyExampleComponent
	]
})
export class DsCardsModule {}
