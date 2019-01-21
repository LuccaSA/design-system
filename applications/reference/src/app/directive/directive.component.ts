import { Component, OnInit } from '@angular/core';
import { DirectiveDocumentationService } from '@prisme/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'pri-ref-directive',
	templateUrl: './directive.component.html',
})
export class DirectiveComponent implements OnInit {
	directive$;
	constructor(
		protected service: DirectiveDocumentationService,
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.directive$ = this.route.fragment.pipe(map(fragment => this.service.get(fragment)));
	}
}
