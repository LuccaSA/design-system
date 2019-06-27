import { NgModule } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';
import { TablesModule } from './tables/tables.module';

@NgModule({
	imports: [
		NavigationModule,
		TablesModule
	],
})
export class ComponentsPrinciplesModule { }
