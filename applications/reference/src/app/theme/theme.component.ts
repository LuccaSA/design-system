import { Component, OnInit } from '@angular/core';
import { ThemeDocumentationService } from '@prisme/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'pri-ref-theme',
	templateUrl: './theme.component.html',
})
export class ThemeComponent implements OnInit {
	theme$;
	constructor(
		protected themeService: ThemeDocumentationService,
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.theme$ = this.route.fragment.pipe(map(fragment => this.themeService.theme(fragment)));
	}
}
