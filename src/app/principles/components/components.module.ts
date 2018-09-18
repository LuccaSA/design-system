import { NgModule } from '@angular/core';
import { DsEmptyStatesModule } from './empty-states/empty-states.module';
import { DsNavigationModule } from './navigation/navigation.module';
import { DsCardsModule } from './cards/cards.module';
import { DsTablesModule } from './tables/tables.module';

@NgModule({
	imports: [
		DsEmptyStatesModule,
		DsNavigationModule,
		DsCardsModule,
		DsTablesModule
	],
})
export class DsComponentsPrinciplesModule { }
