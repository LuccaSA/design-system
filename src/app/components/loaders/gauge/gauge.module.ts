import { NgModule } from '@angular/core';
import { DsCommonsModule } from '@ds/commons';
import { GaugeFeature } from './gauge.feature';
import { BasicExample } from './basic/basic.example';

@NgModule({
	imports: [
		DsCommonsModule
	],
	declarations: [
	GaugeFeature,
	BasicExample],
	entryComponents: [
	BasicExample]
})
export class DsGaugeModule {}
