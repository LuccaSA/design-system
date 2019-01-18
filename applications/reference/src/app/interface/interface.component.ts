import { Component, OnInit } from '@angular/core';
import { InterfaceDocumentationService } from '@prisme/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'pri-ref-interface',
	templateUrl: './interface.component.html',
})
export class InterfaceComponent implements OnInit {
	interface$;
	constructor(
		protected service: InterfaceDocumentationService,
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.interface$ = this.route.fragment.pipe(map(fragment => this.service.get(fragment)));
	}
}
