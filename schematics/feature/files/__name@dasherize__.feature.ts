import { Component } from '@angular/core';
import { IFeatureInfos, DsDocApiService } from '@ds/commons';
declare var require: any;
@Component({
	selector: 'ds-<%=dasherize(name)%>-feature',
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
		<% if (!!scss) { %>theme: this.docApi.theme('<%=scss%>'),<% } %>
		<% if (!!ng) { %>doc: this.docApi.ng('<%=ng%>'),<% } %>
	};

	constructor(
		private docApi: DsDocApiService,
	) {}
}
