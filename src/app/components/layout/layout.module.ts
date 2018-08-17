import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { CardsComponent } from './cards/cards.component';
import { ContainersComponent } from './containers/containers.component';
import { EmptyStatesComponent } from './empty-states/empty-states.component';
import { GridComponent } from './grid/grid.component';
import { StructureGuidelinesComponent } from './structure-guidelines/structure-guidelines.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
	imports: [
		DsCommonsModule
	],
	entryComponents: [
		CardsComponent,
		ContainersComponent,
		EmptyStatesComponent,
		GridComponent,
		StructureGuidelinesComponent,
		TemplatesComponent,
	],
	declarations: [
		CardsComponent,
		ContainersComponent,
		EmptyStatesComponent,
		GridComponent,
		StructureGuidelinesComponent,
		TemplatesComponent,
	]
})
export class LayoutModule { }
