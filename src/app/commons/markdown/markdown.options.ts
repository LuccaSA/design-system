import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { environment } from '../../../environments/environment';

export function markedOptionsFactory(): MarkedOptions {
	const renderer = new MarkedRenderer();

	renderer.blockquote = (text: string) => {
		return `
		<div class="callout mod-icon palette-ng">
			<div class="callout-icon">
				<i class="lucca-icon">info</i>
			</div>
			<span class="extra-infos">${text}</span>
		</div>`;
	};

	renderer.heading = (text: string, level: number) => {
		return `<h${level + 1}>${text}</h${level + 1}>`;
	};

	renderer.image = (href: string, title: string, text: string) => {
		return `<img src="${environment.deployUrl}/${href}" title="${text}" alt="${text}" class="markdown-image"/>`;
	};

	return {
		renderer: renderer,
		baseUrl: environment.deployUrl,
	};
}
