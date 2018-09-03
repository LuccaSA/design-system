import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { CardsComponent } from './cards.component';
import { BasicExampleComponent } from './basic/basic.example';
import { ClickableExampleComponent } from './clickable/clickable.example';
import { DisabledExampleComponent } from './disabled/disabled.example';
import { FooterExampleComponent } from './footer/footer.example';
import { GreyExampleComponent } from './grey/grey.example';

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
