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

	renderer.image = (href: string, desc: string, title: string) => {
		let imageReturn = `<figure class="markdown-image-container">
			<a href="${environment.deployUrl}/${href}" target="_blank" class="markdown-image-link"><i class="lucca-icon icon-outside"></i></a>
			<img src="${environment.deployUrl}/${href}" title="${title}" alt="${title}" class="markdown-image"/>`;
		imageReturn += desc ? `<figcaption>${desc}</figcaption></figure>` : `</figure>`;
		return imageReturn;
	};

	renderer.code = (text: string, classes: string, isEscaped: boolean) => {
		return `<div class="markdown-block ${classes}">${text}</div>`;
	};

	return {
		renderer: renderer,
		baseUrl: environment.deployUrl,
	};
}
