import { Component, OnInit } from '@angular/core';
import { InjectableDocumentationService } from '@prisme/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'pri-ref-injectable',
	templateUrl: './injectable.component.html',
})
export class InjectableComponent implements OnInit {
	injectable$;
	constructor(
		protected service: InjectableDocumentationService,
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.injectable$ = this.route.fragment.pipe(map(fragment => this.service.get(fragment)));
	}
}
