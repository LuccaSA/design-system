import { FeaturePage } from '@ds/commons';
import { <%= classify(name) %>Feature } from './<%=dasherize(name)%>.feature';

export const <%=camelize(name)%>Page = new FeaturePage(
	'<%=dasherize(name)%>',
	'<%=capitalize(name)%>',
	<%= classify(name) %>Feature,
);
