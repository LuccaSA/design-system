import { Component } from '@angular/core';
import { IFeatureInfos, DocumentationService } from '@prisme/common';
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
			<% if (!!directive || !!component || !!pipe) { %>'NG',<% } %>
		],
		<% if (!!scss) { %>theme: this.docService.theme('<%=scss%>'),<% } %>
		<% if (!!directive) { %>directive: this.docService.directive('<%=directive%>'),<% } %>
		<% if (!!component) { %>component: this.docService.component('<%=component%>'),<% } %>
		<% if (!!pipe) { %>pipe: this.docService.pipe('<%=pipe%>'),<% } %>
		<% if (!!guidelines) { %>guidelines: '<%=guidelines%>',<% } %>
	};

	constructor(
		private docService: DocumentationService,
	) {}
}
