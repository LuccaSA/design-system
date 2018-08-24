'use strict';

let fs = require('fs');
let sast = require('sast');
let visit = require('unist-util-visit');
let glob = require('glob');

const distDir = './api';
const fileName = 'scss-theme.api.ts';
const fullFilePath = `${distDir}/${fileName}`;

const sourceFiles = glob.sync("node_modules/@lucca-front/scss/src/theming/**/*.scss", {
	ignore: ['**/_components.scss', '**/_get-set.scss', '**/_utils.scss']
});

const content = sourceFiles.reduce((soFar, file) => {
	let fileContent = fs.readFileSync(file).toString();
	fileContent = fileContent.replace(/(\r\n|\n|\r|\t)/gm, "");
	soFar += fileContent;
	return soFar;
}, '');

const scssContent = sast.parse(content);

let finalContent = 'const SCSS_DOCS = {';

visit(scssContent, 'declaration', (n) => {
	const decl = (sast.jsonify(n));
	if(typeof decl.value === "string") {
		return visit.SKIP;
	}
	finalContent += JSON.stringify(decl.name);
	finalContent += ':';
	finalContent += JSON.stringify(forgeNode(decl.name, decl.value));
	finalContent += ',';
	return visit.SKIP;
});

finalContent += '}; export default SCSS_DOCS;';

if (!fs.existsSync(distDir)) {
	fs.mkdirSync(distDir);
}

fs.writeFile(fullFilePath, finalContent, (err) => {
	if(err) throw err;
});



function forgeNode(key, val) {
	if (typeof val === "string") {
		return forgeValueNode(key, val);
	} else {
		return forgeMapNode(key, val);
	}
}
function forgeValueNode(key, val) {
	return {
		name: key,
		value: val
	};
}
function forgeMapNode(key, val) {
	return {
		name: key,
		children: Object.keys(val).map(key => forgeNode(key, val[key])),
	};
}
