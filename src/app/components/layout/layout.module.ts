import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { ContainersComponent } from './containers/containers.component';
import { EmptyStatesComponent } from './empty-states/empty-states.component';
import { StructureGuidelinesComponent } from './structure-guidelines/structure-guidelines.component';
import { TemplatesComponent } from './templates/templates.component';
import { DsGridModule } from './grid/grid.module';
import { DsCardsModule } from './cards/cards.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsGridModule
		DsCardsModule,
	],
	entryComponents: [
		ContainersComponent,
		EmptyStatesComponent,
		StructureGuidelinesComponent,
		TemplatesComponent,
	],
	declarations: [
		ContainersComponent,
		EmptyStatesComponent,
		StructureGuidelinesComponent,
		TemplatesComponent,
	]
})
export class LayoutModule { }
