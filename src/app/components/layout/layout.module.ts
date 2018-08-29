import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { ContainersComponent } from './containers/containers.component';
import { StructureGuidelinesComponent } from './structure-guidelines/structure-guidelines.component';
import { TemplatesComponent } from './templates/templates.component';
import { DsGridModule } from './grid/grid.module';
import { DsCardsModule } from './cards/cards.module';
import { DsEmptyStatesModule } from './empty-states/empty-states.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsGridModule
		DsCardsModule,
		DsEmptyStatesModule,
	],
	entryComponents: [
		ContainersComponent,
		StructureGuidelinesComponent,
		TemplatesComponent,
	],
	declarations: [
		ContainersComponent,
		StructureGuidelinesComponent,
		TemplatesComponent,
	]
})
export class LayoutModule { }
