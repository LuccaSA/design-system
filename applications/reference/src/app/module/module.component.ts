import { Component, OnInit } from '@angular/core';
import { ModuleDocumentationService } from '@prisme/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'pri-ref-module',
	templateUrl: './module.component.html',
})
export class ModuleComponent implements OnInit {
	module$;
	constructor(
		protected service: ModuleDocumentationService,
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.module$ = this.route.fragment.pipe(map(fragment => this.service.get(fragment)));
	}
}
