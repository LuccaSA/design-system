import { Injectable } from '@angular/core';
import { IAsset } from './asset.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class DsAssetService {
	getHref(asset: IAsset) {
		return `${environment.deployUrl}/${asset.href}`;
	}
}
