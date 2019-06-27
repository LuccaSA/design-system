import { NgModule } from '@angular/core';
import { EmptyStatesModule } from './empty-states/empty-states.module';
import { NavigationModule } from './navigation/navigation.module';
import { TablesModule } from './tables/tables.module';

@NgModule({
	imports: [
		EmptyStatesModule,
		NavigationModule,
		TablesModule
	],
})
export class ComponentsPrinciplesModule { }
