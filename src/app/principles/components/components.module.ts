import { NgModule } from '@angular/core';
import { DsEmptyStatesPrinciplesModule } from './empty-states/empty-states.module';
import { DsNavigationPrincipleModule } from './navigation/navigation.module';
import { DsCardsPrinciplesModule } from './cards/cards.module';
import { DsTablesPrinciplesModule } from './tables/tables.module';

@NgModule({
	imports: [
		DsEmptyStatesPrinciplesModule,
		DsNavigationPrincipleModule,
		DsCardsPrinciplesModule,
		DsTablesPrinciplesModule
	],
})
export class DsComponentsPrinciplesModule { }
