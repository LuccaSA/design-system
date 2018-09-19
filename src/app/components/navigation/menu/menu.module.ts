import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { MenuComponent } from './menu.component';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';

@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		MenuComponent,
		BasicExampleComponent,
		PalettesExampleComponent
	],
	entryComponents: [
		MenuComponent,
		BasicExampleComponent,
		PalettesExampleComponent
	]
})
export class DsMenuModule {}
