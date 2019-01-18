import { Component, OnInit } from '@angular/core';
import { ClassDocumentationService } from '@prisme/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'pri-ref-class',
	templateUrl: './class.component.html',
})
export class ClassComponent implements OnInit {
	class$;
	constructor(
		protected service: ClassDocumentationService,
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.class$ = this.route.fragment.pipe(map(fragment => this.service.get(fragment)));
	}
}
