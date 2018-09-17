import { Component } from '@angular/core';
import { IPageInfos } from '../../commons';
import {
	luccaColorJpg72,
	luccaColorJpg150,
	luccaColorPng72,
	luccaColorGif72,
	luccaColorTiff300,
	luccaColorAi,
	luccaWhitePng72,
	luccaWhiteAi,
	jumpingCCColorJpg72,
	jumpingCCColorJpg150,
	jumpingCCColorPng72,
	jumpingCCColorGif72,
	jumpingCCColorTiff300,
	jumpingCCColorAi,
	jumpingCCWhitePng72,
	jumpingCCWhiteAi
} from './graphic-assets.model';

@Component({
	selector: 'ds-graphic-assets',
	templateUrl: './graphic-assets.component.html',
	styleUrls: ['./graphic-assets.component.scss']
})
export class GraphicAssetsComponent {
	infos: IPageInfos = {
		title: 'Logos Luca',
	};
	luccaColoredLogos = [
		luccaColorJpg72,
		luccaColorJpg150,
		luccaColorPng72,
		luccaColorGif72,
		luccaColorTiff300,
		luccaColorAi,
	];

	luccaWhiteLogos = [
		luccaWhitePng72,
		luccaWhiteAi
	];

	jumpingCCColoredLogos = [
		jumpingCCColorJpg72,
		jumpingCCColorJpg150,
		jumpingCCColorPng72,
		jumpingCCColorGif72,
		jumpingCCColorTiff300,
		jumpingCCColorAi,
	];

	jumpingCCWhiteLogos = [
		jumpingCCWhitePng72,
		jumpingCCWhiteAi
	];

	mainLogos = [
		{ name: 'png'}
	];

	getFileIcon(type: string) {
		return `assets/file-icons/${type}.png`;
	}
}
