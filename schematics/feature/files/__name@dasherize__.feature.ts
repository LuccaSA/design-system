import { Component } from '@angular/core';
import { IFeatureInfos, ThemeDocumentationService } from '@prisme/common';
declare var require: any;
@Component({
	selector: '<%=prefix%>-<%=dasherize(name)%>',
	templateUrl: './<%=dasherize(name)%>.feature.html',
})
export class <%=classify(name)%>Feature {
	infos: IFeatureInfos = {
		title: '<%= title || classify(name)%>',
		examples: [
		],
		packages: [
			<% if (!!scss) { %>'SCSS',<% } %>
			<% if (!!ng) { %>'NG',<% } %>
		],
		<% if (!!scss) { %>theme: this.themeService.theme('<%=scss%>'),<% } %>
		// <% if (!!ng) { %>directive: this.docApi.ng('<%=ng%>'),<% } %>
		<% if (!!guidelines) { %>guidelines: '<%=guidelines%>',<% } %>
	};

	constructor(
		private themeService: ThemeDocumentationService,
	) {}
}
