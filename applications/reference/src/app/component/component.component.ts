import { Component, OnInit } from '@angular/core';
import { ComponentDocumentationService } from '@prisme/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'pri-ref-component',
	templateUrl: './component.component.html',
})
export class ComponentComponent implements OnInit {
	component$;
	constructor(
		protected service: ComponentDocumentationService,
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.component$ = this.route.fragment.pipe(map(fragment => this.service.get(fragment)));
	}
}
