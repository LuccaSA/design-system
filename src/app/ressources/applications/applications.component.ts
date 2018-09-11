import { Component } from '@angular/core';
import {
	luccaLogo,
	figgoLogo,
	cleemyLogo,
	popleeLogo,
	paggaLogo,
	timmiLogo,
	figgoPicto,
	cleemyPicto,
	popleePicto,
	paggaPicto,
	timmiPicto,
	figgoBanner,
	cleemyBanner,
	popleeBanner,
	paggaBanner,
	timmiBanner,
	figgoIllu,
	cleemyIllu,
	popleeIllu,
	paggaIllu,
	timmiIllu,
} from './logo.model';
import { IPageInfos } from '../../commons';

@Component({
	selector: 'ds-logos',
	templateUrl: './applications.component.html',
	styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent {
	infos: IPageInfos = {
		title: 'Illustrations des apps',
	};

	favicons = [
		luccaLogo,
		figgoLogo,
		cleemyLogo,
		popleeLogo,
		paggaLogo,
		timmiLogo,
	];

	pictos = [
		figgoPicto,
		cleemyPicto,
		popleePicto,
		paggaPicto,
		timmiPicto,
	];

	banners = [
		figgoBanner,
		cleemyBanner,
		popleeBanner,
		paggaBanner,
		timmiBanner,
	];

	illus = [
		figgoIllu,
		cleemyIllu,
		popleeIllu,
		paggaIllu,
		timmiIllu,
	];

	getFileIcon(type: string) {
		return `assets/file-icons/${type}.png`;
	}
}
