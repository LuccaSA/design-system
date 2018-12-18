import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { NavSideComponent } from './nav-side.component';
import { BasicExampleComponent } from './basic/basic.example';
import { ItemStatesExampleComponent } from './item-states/item-states.example';
import { SubItemStatesExampleComponent } from './sub-item-states/sub-item-states.example';
import { CompactExampleComponent } from './compact/compact.example';
import { AlertExampleComponent } from './alert/alert.example';
import { LoaderExampleComponent } from './loader/loader.example';
import { MobileExampleComponent } from './mobile/mobile.example';
import { BottomSectionExampleComponent } from './bottom-section/bottom-section.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		NavSideComponent,
		BasicExampleComponent,
		ItemStatesExampleComponent,
		SubItemStatesExampleComponent,
		CompactExampleComponent,
		AlertExampleComponent,
		LoaderExampleComponent,
		MobileExampleComponent,
		BottomSectionExampleComponent,
	],
	entryComponents: [
		NavSideComponent,
		BasicExampleComponent,
		ItemStatesExampleComponent,
		SubItemStatesExampleComponent,
		CompactExampleComponent,
		AlertExampleComponent,
		LoaderExampleComponent,
		MobileExampleComponent,
		BottomSectionExampleComponent,
	]
})
export class DsNavSideModule { }
