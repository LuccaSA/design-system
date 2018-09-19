import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { BasicExampleComponent } from './basic/basic.example';
import { ContainersComponent } from './containers.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		DsCommonsModule,
		RouterModule,
	],
	declarations: [
		ContainersComponent,
		BasicExampleComponent
	],
	entryComponents: [
		ContainersComponent,
		BasicExampleComponent
	]
})
export class DsContainersModule { }
