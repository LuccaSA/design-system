import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { TemplatesComponent } from './templates/templates.component';
import { DsGridModule } from './grid/grid.module';
import { DsCardsModule } from './cards/cards.module';
import { DsEmptyStatesModule } from './empty-states/empty-states.module';
import { DsContainersModule } from './containers/containers.module';
import { DsSectionsModule } from './sections/sections.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsGridModule,
		DsCardsModule,
		DsEmptyStatesModule,
		DsContainersModule,
		DsSectionsModule,
	],
	entryComponents: [
		TemplatesComponent,
	],
	declarations: [
		TemplatesComponent,
	]
})
export class LayoutModule { }
