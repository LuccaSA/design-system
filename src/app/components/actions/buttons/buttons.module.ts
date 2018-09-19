import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { ButtonsComponent } from './buttons.component';
import { BasicExampleComponent } from './basic/basic.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { StatusExampleComponent } from './status/status.example';
import { GroupsExampleComponent } from './groups/groups.example';
import { RadioExampleComponent } from './radio/radio.example';
import { SizesExampleComponent } from './sizes/sizes.example';
@NgModule({
	imports: [ DsCommonsModule ],
	declarations: [
		ButtonsComponent,
		BasicExampleComponent,
		PalettesExampleComponent,
		StatusExampleComponent,
		GroupsExampleComponent,
		RadioExampleComponent,
		SizesExampleComponent
	],
	entryComponents: [
		ButtonsComponent,
		BasicExampleComponent,
		PalettesExampleComponent,
		StatusExampleComponent,
		GroupsExampleComponent,
		RadioExampleComponent,
		SizesExampleComponent
	]
})
export class DsButtonsModule {}
