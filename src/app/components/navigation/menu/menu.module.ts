import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { MenuComponent } from './menu.component';
import { BasicExampleComponent } from './basic/basic.component';
import { PalettesExampleComponent } from './palettes/palettes.component';

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
