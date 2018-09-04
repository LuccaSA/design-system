import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IExample } from './example.model';

@Injectable()
export class DsExampleService {

	constructor(private route: ActivatedRoute, private router: Router) {}

	getCurrentExample(examples: IExample[]): IExample {
		const fragment = this.route.snapshot.fragment;
		const ex = examples.find(example => this.slugify(example.title) === fragment);
		if (ex) {
			return ex;
		}
		return examples[0];
	}

	setCurrentExample(example: IExample) {
		this.router.navigate([], { fragment: this.slugify(example.title), relativeTo: this.route });
	}

	slugify(text) {
		let slug = text.toLowerCase().trim();
		slug = slug.replace(/[^a-z0-9\s-]/g, ' ');
		slug = slug.replace(/[\s-]+/g, '-');
		return slug;
	}


}
