'use strict';

let fs = require('fs');
let sast = require('sast');
let visit = require('unist-util-visit');

const sourceFiles = ['node_modules/@lucca-front/scss/src/theming/components/_card.theme.scss', 'node_modules/@lucca-front/scss/src/theming/_commons.scss' ];
let content = '';
for (const file of sourceFiles) {
	let fileContent = fs.readFileSync(file).toString();
	fileContent = fileContent.replace(/(\r\n|\n|\r|\t)/gm,"");
	content += fileContent;
}

const test = sast.parse(content);
// let finalContent = 'const SCSS_DOCS = {';
let obj = {};

visit(test, 'declaration', (n) => {
	const decl = (sast.jsonify(n));
	if(typeof decl.value === "string") {
		return visit.SKIP;
	}
	obj[decl.name] = decl.value;
	// finalContent += JSON.stringify(decl.name);
	// finalContent += ':';
	// finalContent += JSON.stringify(decl.value);
	// finalContent += ',';
	return visit.SKIP;
});
// finalContent += '}';

fs.writeFile('./scss-theme-docs.json', JSON.stringify(obj), (err) => {
	if(err) throw err;
});


