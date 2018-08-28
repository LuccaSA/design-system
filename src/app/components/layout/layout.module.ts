import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../commons';
import { CardsComponent } from './cards/cards.component';
import { ContainersComponent } from './containers/containers.component';
import { EmptyStatesComponent } from './empty-states/empty-states.component';
import { StructureGuidelinesComponent } from './structure-guidelines/structure-guidelines.component';
import { TemplatesComponent } from './templates/templates.component';
import { DsGridModule } from './grid/grid.module';

@NgModule({
	imports: [
		DsCommonsModule,
		DsGridModule
	],
	entryComponents: [
		CardsComponent,
		ContainersComponent,
		EmptyStatesComponent,
		StructureGuidelinesComponent,
		TemplatesComponent,
	],
	declarations: [
		CardsComponent,
		ContainersComponent,
		EmptyStatesComponent,
		StructureGuidelinesComponent,
		TemplatesComponent,
	]
})
export class LayoutModule { }
