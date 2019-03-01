import { Component, OnInit } from '@angular/core';
import { PipeDocumentationService } from '@prisme/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'pri-ref-pipe',
	templateUrl: './pipe.component.html',
})
export class PipeComponent implements OnInit {
	pipe$;
	constructor(
		protected service: PipeDocumentationService,
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.pipe$ = this.route.fragment.pipe(map(fragment => this.service.get(fragment)));
	}
}
