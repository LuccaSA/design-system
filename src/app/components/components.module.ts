import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureGuidelinesComponent } from './layout/structure-guidelines/structure-guidelines.component';
import { TemplatesComponent } from './layout/templates/templates.component';
import { ContainersComponent } from './layout/containers/containers.component';
import { GridComponent } from './layout/grid/grid.component';
import { CardsComponent } from './layout/cards/cards.component';
import { EmptyStatesComponent } from './layout/empty-states/empty-states.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { BreadcrumbsComponent } from './navigation/breadcrumbs/breadcrumbs.component';
import { TextGuidelinesComponent } from './text/text-guidelines/text-guidelines.component';
import { TitlesComponent } from './text/titles/titles.component';
import { BasicTextComponent } from './text/basic-text/basic-text.component';
import { LabelsComponent } from './text/labels/labels.component';
import { FormGuidelinesComponent } from './form/form-guidelines/form-guidelines.component';
import { TextfieldsComponent } from './form/textfields/textfields.component';
import { SelectComponent } from './form/select/select.component';
import { RadiosComponent } from './form/radios/radios.component';
import { CheckboxesComponent } from './form/checkboxes/checkboxes.component';
import { SwitchesComponent } from './form/switches/switches.component';
import { FileComponent } from './form/file/file.component';
import { FramedComponent } from './form/framed/framed.component';
import { ActionGuidelinesComponent } from './actions/action-guidelines/action-guidelines.component';
import { ButtonsComponent } from './actions/buttons/buttons.component';
import { LinksComponent } from './actions/links/links.component';
import { ActionIconsComponent } from './actions/action-icons/action-icons.component';
import { TablesComponent } from './listings/tables/tables.component';
import { ListsComponent } from './listings/lists/lists.component';
import { ChipsComponent } from './listings/chips/chips.component';
import { ToastsComponent } from './feedback/toasts/toasts.component';
import { CalloutsComponent } from './feedback/callouts/callouts.component';
import { BoxesComponent } from './feedback/boxes/boxes.component';
import { LoadingsComponent } from './loaders/loadings/loadings.component';
import { ProgressComponent } from './loaders/progress/progress.component';
import { IconsComponent } from './icons/icons.component';
import { UtilitiesComponent } from './misc/utilities/utilities.component';
import { FunctionsComponent } from './misc/functions/functions.component';
import { MixinsComponent } from './misc/mixins/mixins.component';
import { AnimationsComponent } from './animations/animations.component';
import { DsCommonsModule } from '../commons/commons.module';
import { RouterModule } from '@angular/router';
import { OverlaysModule } from './overlays/overlays.module';
import { UsersModule } from './users/users.module';

@NgModule({
	imports: [
		CommonModule,
		DsCommonsModule,
		OverlaysModule,
		UsersModule,
		RouterModule,
	],
	declarations: [
		StructureGuidelinesComponent,
		TemplatesComponent,
		ContainersComponent,
		GridComponent,
		CardsComponent,
		EmptyStatesComponent,
		MenuComponent,
		BreadcrumbsComponent,
		TextGuidelinesComponent,
		TitlesComponent,
		BasicTextComponent,
		LabelsComponent,
		FormGuidelinesComponent,
		TextfieldsComponent,
		SelectComponent,
		RadiosComponent,
		CheckboxesComponent,
		SwitchesComponent,
		FileComponent,
		FramedComponent,
		ActionGuidelinesComponent,
		ButtonsComponent,
		LinksComponent,
		ActionIconsComponent,
		TablesComponent,
		ListsComponent,
		ChipsComponent,
		ToastsComponent,
		CalloutsComponent,
		BoxesComponent,
		LoadingsComponent,
		ProgressComponent,
		IconsComponent,
		UtilitiesComponent,
		FunctionsComponent,
		MixinsComponent,
		AnimationsComponent
	],
	entryComponents: [
		StructureGuidelinesComponent,
		TemplatesComponent,
		ContainersComponent,
		GridComponent,
		CardsComponent,
		EmptyStatesComponent,
		MenuComponent,
		BreadcrumbsComponent,
		TextGuidelinesComponent,
		TitlesComponent,
		BasicTextComponent,
		LabelsComponent,
		FormGuidelinesComponent,
		TextfieldsComponent,
		SelectComponent,
		RadiosComponent,
		CheckboxesComponent,
		SwitchesComponent,
		FileComponent,
		FramedComponent,
		ActionGuidelinesComponent,
		ButtonsComponent,
		LinksComponent,
		ActionIconsComponent,
		TablesComponent,
		ListsComponent,
		ChipsComponent,
		ToastsComponent,
		CalloutsComponent,
		BoxesComponent,
		LoadingsComponent,
		ProgressComponent,
		IconsComponent,
		UtilitiesComponent,
		FunctionsComponent,
		MixinsComponent,
		AnimationsComponent
	]
})
export class DsComponentsModule { }
