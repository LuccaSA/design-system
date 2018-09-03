import { NgModule } from '@angular/core';
import { DsCommonsModule } from '../../../commons';
import { TextfieldsComponent } from './textfields.component';
import { BasicExampleComponent } from './basic/basic.example';
import { InputModsExampleComponent } from './input-mods/input-mods.example';
import { SizesExampleComponent } from './sizes/sizes.example';
import { MessagesExampleComponent } from './messages/messages.example';
import { ValidationExampleComponent } from './validation/validation.example';
import { SuffixExampleComponent } from './suffix/suffix.example';
import { StatusExampleComponent } from './status/status.example';
import { PalettesExampleComponent } from './palettes/palettes.example';
import { RadioExampleComponent } from './radio/radio.example';
import { TextareaExampleComponent } from './textarea/textarea.example';

@NgModule({
	imports: [DsCommonsModule],
	declarations: [
		TextfieldsComponent,
		BasicExampleComponent,
		InputModsExampleComponent,
		SizesExampleComponent,
		MessagesExampleComponent,
		ValidationExampleComponent,
		SuffixExampleComponent,
		StatusExampleComponent,
		PalettesExampleComponent,
		RadioExampleComponent,
		TextareaExampleComponent,
	],
	entryComponents: [
		TextfieldsComponent,
		BasicExampleComponent,
		InputModsExampleComponent,
		SizesExampleComponent,
		MessagesExampleComponent,
		ValidationExampleComponent,
		SuffixExampleComponent,
		StatusExampleComponent,
		PalettesExampleComponent,
		RadioExampleComponent,
		TextareaExampleComponent,
	]
})
export class DsTextfieldsModule { }
