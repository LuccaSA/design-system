import { FeaturePage } from '@ds/commons';
import { <%= classify(name) %>Component } from './<%=dasherize(name)%>.component';

export const <%=camelize(name)%>Page = new FeaturePage(
	'<%=dasherize(name)%>',
	'<%=capitalize(name)%>',
	<%= classify(name) %>Component,
);
