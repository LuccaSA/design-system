import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { GaugeFeature } from './gauge.feature';
import { BasicExample } from './basic/basic.example';
import { WeightExample } from './weight/weight.example';
import { PalettesExample } from './palettes/palettes.example';

@NgModule({
	imports: [
		DsCommonsModule
	],
	declarations: [
	GaugeFeature,
	BasicExample,
	WeightExample,
	PalettesExample],
	entryComponents: [
	BasicExample,
	WeightExample,
	PalettesExample]
})
export class DsGaugeModule {}
